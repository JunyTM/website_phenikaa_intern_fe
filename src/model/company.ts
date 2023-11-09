import { BaseModel } from "./base";

export interface Company extends BaseModel {
  name: string;
  description: string;
  founding_day: string;
  phone: string;
  email: string;
  adress: string;
}
