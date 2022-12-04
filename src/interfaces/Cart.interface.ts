import { IProduct } from './Product.interface';
export interface ICart {
  items: IProduct[];
  total: number;
}

export interface ICartState extends ICart {}
