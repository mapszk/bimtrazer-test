export interface IBlock {
  _id: string;
  description: string;
  startDate: string;
  endDate: string;
  progress: number;
}

export interface ICreateBlockDTO {
  description: string;
  startDate: string;
  endDate: string;
  progress: number;
}
