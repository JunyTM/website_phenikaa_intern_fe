import { BaseModel } from "./base";
import { Company } from "./company";
export interface Job extends BaseModel {
  company_id: number;
  title: string;
  require: string;
  job_desc: string;
  form_of_work: string;
  benefit: string;
  quantity: number;
  adress: string;
  salary: string;
  end_date: string;
  Company?: Company | null;
}
