import { IUser } from '@/models'

export default interface IUserSigninCredentials extends Pick<IUser, 'email' | 'password'> {}
