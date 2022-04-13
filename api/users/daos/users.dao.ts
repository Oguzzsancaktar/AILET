import shortid from 'shortid';
import debug from 'debug';

const log: debug.IDebugger = debug('app:in-memory-dao');

import { CreateUserDto } from '../dto/create.user.dto';
import { PatchUserDto } from '../dto/patch.user.dto';
import { PutUserDto } from '../dto/put.user.dto';


class UsersDao {
  users: Array<CreateUserDto> = [];

  constructor() {
    log('Created new instance of UsersDao');
  }

  async addUser(user: CreateUserDto) {
    user.id = shortid.generate();
    this.users.push(user);
    return user.id;
  }

  async getUsers() {
    return this.users;
  }

  async getUserByEmail(email: string) {
    const objIndex = this.users.findIndex((obj: { email: string }) => obj.email === email)
    const currentUser = this.users[objIndex]

    if (currentUser) {
      return currentUser
    } else {
      return null
    }
  }

  async getUserById(userId: string) {
    return this.users.find((user: { id: string }) => user.id === userId);
  }

  async putUserById(userId: string, user: PutUserDto) {
    const objIndex = this.users.findIndex((obj: { id: string }) => obj.id === userId);
    this.users.splice(objIndex, 1, user);
    return `${user.id} updated via put`
  }

  async patchUserById(userId: string, user: PatchUserDto) {
    const objIndex = this.users.findIndex((obj: { id: string }) => obj.id === user.id)
    let currentUser = this.users[objIndex]
    let allowedPatchFields = [
      "password",
      "firstName",
      "lastName",
      "permissionLevel"
    ]

    for (let field in allowedPatchFields) {
      if (field in user) {
        // @ts-ignore
        currentUser[field] = user[field]
      }
    }
    this.users.splice(objIndex, 1, currentUser)
    return `${user.id} patched`;
  }

  async removeUserById(userId: string) {
    const ObjIndex = this.users.findIndex((obj: { id: string }) => obj.id === userId);
    this.users.splice(ObjIndex, 1);

    // this.users.filter((user: { id: string }) => user.id !== userId);
    return `${userId} removed`;
  }

}

export default new UsersDao();