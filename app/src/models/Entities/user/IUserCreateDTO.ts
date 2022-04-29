import { IUser } from '@/models';
export default interface IUserCreateDTO extends Pick<IUser, "username" | "email" | "password"> {
}