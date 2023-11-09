import { BaseModel } from "./base";
import { Role } from "./role";

export interface User extends BaseModel {
  username: string;
  password: string;
  user_roles: UserRole;
}

export interface UserRole extends BaseModel {
  user_id: number;
  role_id: number;
  active: boolean;
  role: Role;
}

export interface UserRegistry extends User {
  fullName: string;
  email: string;
  phone: string;
}

export interface UserReponse {
  Id: number;
  role: string;
  username: string;
  access_token: string;
  refresh_token: string;
}

export interface UserLogin {
  username: string;
  password: string;
}

export interface UserRegister {
  username: string;
  password: string;
  fullName: string;
  email: string;
  phone: string;
}
