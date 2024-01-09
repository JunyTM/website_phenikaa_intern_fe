import { BaseModel } from "./base";

export interface RoleModel extends BaseModel {
    code: string;
    name: string;
    description?: string;
}