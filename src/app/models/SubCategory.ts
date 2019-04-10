import { CategoryTypeEnum } from './CategoryTypeEnum';

export interface SubCategory {
  id: number;
  name: string;
  categoryId: number;
  categoryTypeEnum: CategoryTypeEnum;
}
