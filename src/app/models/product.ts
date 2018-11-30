import { Category } from './category';

export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
  category: Category;
  keyFeatures: string[];
  quantity: number;
  dateSold: Date;
}
