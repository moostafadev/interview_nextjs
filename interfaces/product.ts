export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  category: {
    id: number;
    name: string;
  };
  images: string[];
}
