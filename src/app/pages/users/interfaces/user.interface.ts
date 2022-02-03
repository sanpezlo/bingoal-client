export enum Role {
  'Admin' = 'Admin',
}

export interface CreateUserDto {
  name: string;
  email: string;
  password: string;
}

export interface FindUsersDto {
  offset?: number;
  limit?: number;
}

export interface FindOneUserDto {
  id: string;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  roles: Role[];
  // games?: Game[] | string[];
  createdAt: Date;
  updatedAt: Date;
}
