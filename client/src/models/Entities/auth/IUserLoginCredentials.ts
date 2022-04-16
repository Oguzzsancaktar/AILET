import { IUser } from '@/models';
export default interface IUserLoginCredentials extends Pick<IUser, 'username' | "password"> {
}