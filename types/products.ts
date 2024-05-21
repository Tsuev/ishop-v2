export type ProductType = {
  id?: string;
  name: string;
  series: string;
  model: string;
  color: string;
  description: string;
  created_at?: string;
  user_id: string;
  battery: number;
  memory: number;
  new: boolean;
};
