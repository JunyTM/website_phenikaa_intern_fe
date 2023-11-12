import { Company } from "./company";
import { BaseModel } from "./base";
import { Profile } from "./Profile";
import { EvaluationReport } from "./evaluate";

export interface InternShip extends BaseModel {
  profile_id: number;
  company_id: number;
  internship_evaluate_id: number;
  code: string;

  profile?: Profile | null;
  company?: Company | null;
  internship_evaluate?: EvaluationReport | null;
}
