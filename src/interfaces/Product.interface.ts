export interface IProduct {
  title: string;
  description: string;
  category: string;
  id: number;
  rating: {
    rate: number;
    count: number;
  };
  image: string;
  price: number;
}
