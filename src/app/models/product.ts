import { Category } from './category';
import { Feature } from './Feature';

export class Product {
  id: number;
  name: string;
  code: string;
  description: string;
  price: number;
  imgUrl: string;
  categoryId: number;
  categoryName: string;
  merchantName: string;
  merchantId: number;
  brandName: string;
  brandId: number;
  storeId: number;
  pickUpAvailable: boolean;
  quantityOrdered: number;
  keyFeatures: string[];
  quantityAvailable: number;
  dateSold: Date;
  features: Feature[];
}

