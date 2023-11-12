import { BaseModel } from "../model/base";

export interface EvaluationReport extends BaseModel {
  instructor: string; // người hướng dẫn
  attitude: string; // thái dộ
  knowledge: string; // kiến thức
  evaluation: number; // đánh giá theo thang điểm 5
  start_date: string; // ngày bắt đầu
  end_date: string; // ngày kết thúc
}
