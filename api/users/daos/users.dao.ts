import shortid from 'shortid';
import debug from 'debug';

const log: debug.IDebugger = debug('app:in-memory-dao');

import { CreateUserDto } from '../dto/create.user.dto';
import { PatchUserDto } from '../dto/patch.user.dto';
import { PutUserDto } from '../dto/put.user.dto';

import mongooseService from '../../common/services/mongoose.service';
import { PermissionFlag } from '../../common/middleware/common.permissionflag.enum';


class UsersDao {
  users: Array<CreateUserDto> = [];

  constructor() {
    log('Created new instance of UsersDao');
  }

  Schema = mongooseService.getMongoose().Schema;
  userSchema = new this.Schema({
    _id: String,
    username: String,
    email: String,
    password: { type: String, select: false },
    firstName: String,
    lastName: String,
    permissionFlags: Number,
  }, { id: false });

  User = mongooseService.getMongoose().model('Users', this.userSchema);

  async addUser(userFields: CreateUserDto) {
    const userId = shortid.generate()
    const user = new this.User({
      _id: userId,
      ...userFields,
      permissionFlags: PermissionFlag.FREE_PERMISSION
    })
    await user.save()
    return userId
  }

  async getUserByEmail(email: string) {
    return this.User.findOne({ email: email }).exec();
  }

  async getUserById(userId: string) {
    return this.User.findOne({ _id: userId }).exec();
  }

  async getUsers(limit = 25, page = 0) {
    return this.User.find()
      .limit(limit)
      .skip(limit * page)
      .exec();
  }

  async updateUserById(userId: string, userFields: PatchUserDto | PutUserDto) {
    const existingUser = await this.User.findByIdAndUpdate(userId, { $set: userFields }, { new: true }).exec()
    return existingUser
  }

  async removeUserById(userId: string) {
    return await this.User.deleteOne({ _id: userId }).exec()
  }

  async getUserByEmailWithPassword(email: string) {
    return this.User.findOne({ email }).select("_id permissionFlags username +password").exec()
  }

}

export default new UsersDao();