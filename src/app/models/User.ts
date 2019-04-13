import { Person } from "./Person";
import { Product } from "./product";

export class User extends Person {
  itemsBought: Product[];
  constructor(name = "defaultUser") {
    super(name);
    this.itemsBought = [];
  }
}
export enum UserRole {
  User,
  Admin
}
