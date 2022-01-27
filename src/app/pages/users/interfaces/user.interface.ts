export interface CreateUserDto {
  name: string;
  email: string;
  password: string;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  //   roles?: Role[];
  //   games?: Game[] | string[];
  createdAt: Date;
  updatedAt: Date;
}
