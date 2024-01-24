import { BaseModel } from "./base";
import { RoleModel } from "./role";
import { Profile } from "./Profile";

// Declear db models
export interface UserModel extends BaseModel {
  username: string;
  password: string;
  user_roles: UserRoleModel;
}

export interface UserRoleModel extends BaseModel {
  user_id: number;
  role_id: number;
  active: boolean;
  role: RoleModel;
}

// Declear request & response models
export interface UserLogin {
  username: string;
  password: string;
}

export interface UserRegister {
  fullName: string;
  email: string;
  password: string;
  code: string;
  phone: string;
  birthday: string;
}
export interface UserReponse {
  Id: number;
  role: string;
  username: string;
  fullname: string;
  // access_token: string;
  // refresh_token: string;
  Profile?: Profile;
}

export interface UserForgotPassword {
  email: string;
}