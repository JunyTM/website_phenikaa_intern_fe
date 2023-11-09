import { BaseModel } from "./base";

export interface Role extends BaseModel {
    code: string;
    name: string;
    description?: string;
}