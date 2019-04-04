import { Category } from './category';
import { Feature } from './Feature';

export class Product {
  id: number;
  name: string;
  code: string;
  description: string;
  price: number;
  imgUrl: string;
  categoryName: string;
  merchantName: string;
  brandName: string;
  pickUpAvailable: boolean;
  quantityOrdered: number;
  keyFeatures: string[];
  quantityAvailable: number;
  dateSold: Date;
  features: Feature[];
}

