import { CommonRoutesConfig } from '../common/common.routes.config';
import express from 'express';
import UsersController from './controllers/users.controller';
import UsersMiddleware from './middleware/users.middleware';

import BodyValidationMiddleware from '../common/middleware/body.validation.middleware';
import { body } from 'express-validator';

export class UsersRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'UsersRoutes');
  }

  configureRoutes(): express.Application {
    this.app.route("/users")
      .get(UsersController.listUsers)
      .post(
        UsersMiddleware.validateRequiredUserBodyFields,
        UsersMiddleware.validateSameEmailDoesntExist,
        UsersController.createUser)

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
      .all(UsersMiddleware.validateUserExists)
      .get(UsersController.getUserById)
      .delete(UsersController.removeUser);

    this.app.put(`/users/:userId`, [
      UsersMiddleware.validateRequiredUserBodyFields,
      UsersMiddleware.validateSameEmailBelongToSameUser,
      UsersController.put,
    ]);

    this.app.patch(`/users/:userId`, [
      UsersMiddleware.validatePatchEmail,
      UsersController.patch,
    ]);


    return this.app;
  }

}