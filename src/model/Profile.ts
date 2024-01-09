import { BaseModel } from "./base";
// import { User } from "./user";

export interface Profile extends BaseModel {
  user_id: number;
  name: string;
  code: string;
  email: string;
  phone: string;
  birthday: string;
  // user: User;
}
