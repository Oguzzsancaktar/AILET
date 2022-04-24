import { CommonRoutesConfig } from "../common/common.routes.config";
import express from "express";
import UsersController from "./controllers/users.controller";
import UsersMiddleware from "./middleware/users.middleware";

import BodyValidationMiddleware from "../common/middleware/body.validation.middleware";
import { body } from "express-validator";

import jwtMiddleware from "../auth/middleware/jwt.middleware";
import permissionMiddleware from "../common/middleware/common.permission.middleware";
import { PermissionFlag } from "../common/middleware/common.permissionflag.enum";
export class UsersRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "UsersRoutes");
  }

  configureRoutes(): express.Application {
    this.app
      .route("/users")
      .get(
        jwtMiddleware.validJWTNeeded,
        permissionMiddleware.permissionFlagRequired(
          PermissionFlag.ADMIN_PERMISSION
        ),
        UsersController.listUsers
      )
      .post(
        // UsersMiddleware.validateRequiredUserBodyFields,
        body("username")
          .isLength({ min: 6 })
          .withMessage("Must include username (6+ characters)"),
        body("email").isEmail(),
        body("password")
          .isLength({ min: 6 })
          .withMessage("Must include password (6+ characters)"),
        BodyValidationMiddleware.verifyBodyFieldsErrors,
        UsersMiddleware.validateSameEmailDoesntExist,
        UsersController.createUser
      );

    this.app.param(`userId`, UsersMiddleware.extractUserId);
    // this.app.route("/users/:userId")
    // .all((req: express.Request, res: express.Response, next: express.NextFunction) => {

    //   // this middleware function runs before any request to /users/:userId
    //   // but it doesn't accomplish anything just yet---
    //   // it simply passes control to the next applicable function below using next()

    //   next()
    // })
    this.app
      .route(`/users/:userId`)
      .all(
        UsersMiddleware.validateUserExists,
        jwtMiddleware.validJWTNeeded,
        permissionMiddleware.onlySameUserOrAdminCanDoThisAction
      )
      .get(UsersController.getUserById)
      .delete(UsersController.removeUser);

    this.app.put(`/users/:userId`, [
      // UsersMiddleware.validateRequiredUserBodyFields,
      body("email").isEmail(),
      body("password")
        .isLength({ min: 6 })
        .withMessage("Must include password (6+ characters)"),
      body("firstName").isString(),
      body("lastName").isString(),
      body("permissionFlags").isInt(),
      BodyValidationMiddleware.verifyBodyFieldsErrors,
      UsersMiddleware.validateSameEmailBelongToSameUser,
      UsersController.put,
    ]);

    this.app.patch(`/users/:userId`, [
      body("email").isEmail().optional(),
      body("password")
        .isLength({ min: 6 })
        .withMessage("Password must be 6+ characters")
        .optional(),
      body("firstName").isString().optional(),
      body("lastName").isString().optional(),
      body("permissionFlags").isInt().optional(),
      BodyValidationMiddleware.verifyBodyFieldsErrors,
      UsersMiddleware.validatePatchEmail,
      UsersController.patch,
    ]);

    this.app.put(`/users/:userId/permissionFlags/:permissionFlags`, [
      jwtMiddleware.validJWTNeeded,
      permissionMiddleware.onlySameUserOrAdminCanDoThisAction,

      // Note: The above two pieces of middleware are needed despite
      // the reference to them in the .all() call, because that only covers
      // /users/:userId, not anything beneath it in the hierarchy

      permissionMiddleware.permissionFlagRequired(
        PermissionFlag.USER_PERMISSION
      ),
      UsersController.updatePermissionFlags,
    ]);

    return this.app;
  }
}
