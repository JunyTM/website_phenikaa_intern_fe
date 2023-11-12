import { BaseModel } from "./base";
import { Profile } from "./Profile";
import { Job } from "./job";

export interface Recruitment extends BaseModel {
  profile_id: number;
  intern_job_id: number;
  accepted: boolean;
  profile_path: string;
  profile?: Profile | null;
  intern_job?: Job | null;
}
