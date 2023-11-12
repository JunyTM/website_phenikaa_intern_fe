import { BaseModel } from "./base";
// import { User } from "./user";

export interface Profile extends BaseModel {
  name: string;
  code: string;
  email: string;
  phone: string;
  user_id: number;
  birthday: string;
  // user: User;
}
