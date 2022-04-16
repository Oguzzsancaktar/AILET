export interface PutUserDto {
  username: string,
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  permissionFlags: number;
}