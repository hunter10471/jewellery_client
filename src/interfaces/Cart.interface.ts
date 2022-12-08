import { IProduct } from './Product.interface';
export interface ICart {
  items: {
    product: IProduct;
    quantity: number;
  }[];
  total: number;
}

export interface ICartState extends ICart {}
