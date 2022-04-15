import express from "express";
import userService from "../services/users.service";
import argon2 from 'argon2'
import debug from 'debug'


const log: debug.Debugger = debug('app:users-controller')

class UsersController {

  async listUsers(req: express.Request, res: express.Response) {
    const users = await userService.list(100, 0)
    res.status(200).send(users)
  }

  async getUserById(req: express.Request, res: express.Response) {
    const user = await userService.readById(req.body.id)
    res.status(200).send(user)
  }

  async getUserByEmail(req: express.Request, res: express.Response) {
    const user = await userService.getUserByEmail(req.body.email)
    res.status(200).send(user)
  }

  async createUser(req: express.Request, res: express.Response) {
    req.body.password = await argon2.hash(req.body.password)
    const userId = await userService.create(req.body)
    res.status(201).send({ id: userId })
  }

  async patch(req: express.Request, res: express.Response) {
    if (req.body.password) {
      req.body.password = await argon2.hash(req.body.password)
    }
    log(await userService.patchById(req.body.id, req.body))
    res.status(204).send()
  }

  async put(req: express.Request, res: express.Response) {
    req.body.password = await argon2.hash(req.body.password)
    log(await userService.putById(req.body.id, req.body))
    res.status(204).send()
  }

  async removeUser(req: express.Request, res: express.Response) {
    log(await userService.deleteById(req.body.id))
    res.status(204).send()
  }
}


export default new UsersController()