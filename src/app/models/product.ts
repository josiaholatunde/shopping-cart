import { Category } from './category';

export class Product {
  id: number;
  name: string;
  code: string;
  description: string;
  price: number;
  imgUrl: string;
  categoryName: string;
  merchantName: string;
  pickUpAvailable: boolean;
  keyFeatures: string[];
  quantityAvailable: number;
  dateSold: Date;
}
