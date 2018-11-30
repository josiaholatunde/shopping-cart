import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Product } from '../models/product';
import { User } from '../models/User';
import { EventEmitter } from 'events';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private categories: Category[];
  private gowns: Product[];
  private phones: Product[];
  private sneakers: Product[];
  private bags: Product[];
  private shirts: Product[];
  private laptops: Product[];
  private cartItems: Product[];
  constructor() {
    this.cartItems = [];
    this.categories = [
      Category.Gowns,
      Category.Laptops,
      Category.Shirts,
      Category.Phones,
      Category.Shirts,
      Category.Sneakers,
      Category.Bags,

    ];
    this.laptops = [
      {id: 1,name: 'Mac Book Pro',keyFeatures: ['Display: 6-Inch HD','CPU: 1.3 GHz Quad Core','Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'], quantity:7, description: '64GB Android 7.0',price: 72277,imgUrl:'laptops/laptop_3.jpg',category: Category.Laptops, dateSold: null },
      {id: 2,name: 'Mac Book Air',quantity:5,keyFeatures: ['Display: 6-Inch HD','CPU: 1.3 GHz Quad Core','Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'], description: '64GB Android 7.0',price: 77337,imgUrl:'laptops/laptop_3.jpg',category: Category.Laptops, dateSold: null },
      {id: 3,name: 'Mac Book Pro', quantity:3, keyFeatures: ['Display: 6-Inch HD','CPU: 1.3 GHz Quad Core','Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'], description: '64GB Android 7.0',price: 77117,imgUrl:'laptops/laptop_3.jpg',category: Category.Laptops, dateSold: null },
      {id: 4,name: 'Mac Book Pro', quantity:8, keyFeatures: ['Display: 6-Inch HD','CPU: 1.3 GHz Quad Core','Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'], description: '64GB Android 7.0',price: 775437,imgUrl:'laptops/laptop_3.jpg',category: Category.Laptops, dateSold: null },
      {id: 5,name: 'Mac Book Pro', quantity:3, keyFeatures: ['Display: 6-Inch HD','CPU: 1.3 GHz Quad Core','Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'], description: '64GB Android 7.0',price: 77700,imgUrl:'laptops/laptop_3.jpg',category: Category.Laptops, dateSold: null },
    ];
    this.phones = [
      {id: 1,name: 'IPhone X',keyFeatures: ['Display: 6-Inch HD','CPU: 1.3 GHz Quad Core','Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'], quantity:7, description: '64GB Android 7.0',price: 72277,imgUrl:'phones/phone1.jpg',category: Category.Phones, dateSold: null },
      {id: 2,name: 'Infinix Hot6',quantity:5,keyFeatures: ['Display: 6-Inch HD','CPU: 1.3 GHz Quad Core','Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'], description: '64GB Android 7.0',price: 77337,imgUrl:'phones/phone1.jpg',category: Category.Phones, dateSold: null },
      {id: 3,name: 'Infinix Hot5', quantity:3, keyFeatures: ['Display: 6-Inch HD','CPU: 1.3 GHz Quad Core','Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'], description: '64GB Android 7.0',price: 77117,imgUrl:'phones/phone1.jpg',category: Category.Phones, dateSold: null },
      {id: 4,name: 'IPhone 5s', quantity:8, keyFeatures: ['Display: 6-Inch HD','CPU: 1.3 GHz Quad Core','Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'], description: '64GB Android 7.0',price: 775437,imgUrl:'phones/phone1.jpg',category: Category.Phones, dateSold: null },
      {id: 5,name: 'IPhone 7s', quantity:3, keyFeatures: ['Display: 6-Inch HD','CPU: 1.3 GHz Quad Core','Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'], description: '64GB Android 7.0',price: 77700,imgUrl:'phones/phone1.jpg',category: Category.Phones, dateSold: null },
    ];
    this.gowns = [
      {id: 1,name: 'Wedding Gown', keyFeatures: ['Display: 6-Inch HD','CPU: 1.3 GHz Quad Core','Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'], quantity:9, description: '64GB Android 7.0',price: 72277,imgUrl:'gowns/wedding_dress5.jpg',category: Category.Gowns, dateSold: null },
      {id: 2,name: 'Casual Gowns', quantity:10,keyFeatures: ['Display: 6-Inch HD','CPU: 1.3 GHz Quad Core','Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'], description: '64GB Android 7.0',price: 77337,imgUrl:'gowns/wedding_dress5.jpg',category: Category.Gowns, dateSold: null },
      {id: 3,name: 'Dinner Gown', quantity:11,keyFeatures: ['Display: 6-Inch HD','CPU: 1.3 GHz Quad Core','Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'], description: '64GB Android 7.0',price: 77117,imgUrl:'gowns/wedding_dress5.jpg',category: Category.Gowns, dateSold: null },
      {id: 3,name: 'Red Gown', quantity:7, keyFeatures: ['Display: 6-Inch HD','CPU: 1.3 GHz Quad Core','Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'], description: '64GB Android 7.0',price: 775437,imgUrl:'gowns/wedding_dress5.jpg',category: Category.Gowns, dateSold: null },
      {id: 4,name: 'Gown Tag', quantity:7,keyFeatures: ['Display: 6-Inch HD','CPU: 1.3 GHz Quad Core','Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'], description: '64GB Android 7.0',price: 77700,imgUrl:'gowns/wedding_dress5.jpg',category: Category.Gowns, dateSold: null },
    ];
    this.sneakers = [
      {id: 1,name: 'Puma', quantity:10,keyFeatures: ['Display: 6-Inch HD','CPU: 1.3 GHz Quad Core','Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'], description: '64GB Android 7.0',price: 72277,imgUrl:'sneakers/Sneakers7.jpg',category: Category.Sneakers, dateSold: null },
      {id: 2,name: 'Tom Hilfiger', quantity:7, keyFeatures: ['Display: 6-Inch HD','CPU: 1.3 GHz Quad Core','Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'], description: '64GB Android 7.0',price: 77337,imgUrl:'sneakers/Sneakers7.jpg',category: Category.Sneakers, dateSold: null },
      {id: 3,name: 'ECCO', quantity:7, keyFeatures: ['Display: 6-Inch HD','CPU: 1.3 GHz Quad Core','Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'], description: '64GB Android 7.0',price: 77117,imgUrl:'sneakers/Sneakers7.jpg',category: Category.Sneakers, dateSold: null },
      {id: 4,name: 'Mok Luks', quantity:7, keyFeatures: ['Display: 6-Inch HD','CPU: 1.3 GHz Quad Core','Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'], description: '64GB Android 7.0',price: 775437,imgUrl:'sneakers/Sneakers7.jpg',category: Category.Sneakers, dateSold: null },
      {id: 5,name: 'Larks', quantity:7, keyFeatures: ['Display: 6-Inch HD','CPU: 1.3 GHz Quad Core','Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'],description: '64GB Android 7.0',price: 77700,imgUrl:'sneakers/Sneakers7.jpg',category: Category.Sneakers, dateSold: null },
    ];

    this.bags = [
      {id: 1,name: 'Mini Bag',quantity:7, description: '64GB Android 7.0', keyFeatures: ['Display: 6-Inch HD','CPU: 1.3 GHz Quad Core','Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'],price: 72277,imgUrl:'bags/bag1.jpg',category: Category.Bags, dateSold: null },
      {id: 2,name: 'Bucket Bag', quantity:7, description: '64GB Android 7.0', keyFeatures: ['Display: 6-Inch HD','CPU: 1.3 GHz Quad Core','Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'],price: 77337,imgUrl:'bags/bag1.jpg',category: Category.Bags, dateSold: null },
      {id: 3,name: 'Clutches', quantity:7, description: '64GB Android 7.0',keyFeatures: ['Display: 6-Inch HD','CPU: 1.3 GHz Quad Core','Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'],price: 77117,imgUrl:'bags/bag1.jpg',category: Category.Bags, dateSold: null },
      {id: 4,name: 'Back Packs', quantity:7, description: '64GB Android 7.0', keyFeatures: ['Display: 6-Inch HD','CPU: 1.3 GHz Quad Core','Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'],price: 775437,imgUrl:'bags/bag1.jpg',category: Category.Bags, dateSold: null },
      {id: 5,name: 'Larks', quantity:7, description: '64GB Android 7.0',price: 77700,keyFeatures: ['Display: 6-Inch HD','CPU: 1.3 GHz Quad Core','Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'],imgUrl:'bags/bag1.jpg',category: Category.Bags, dateSold: null },
    ];

    this.shirts = [
      {id: 1,name: 'Mini Shirt', quantity:7, description: '64GB Android 7.0',price: 72277,imgUrl:'shirts/FShirt2.jpg',category: Category.Shirts, dateSold: null, keyFeatures: ['Display: 6-Inch HD','CPU: 1.3 GHz Quad Core','Memory: 16GB ROM + 1GB RAM (Expandable via microSD)']},
      {id: 2,name: 'Bucket Bag',quantity:7, description: '64GB Android 7.0',price: 77337,imgUrl:'shirts/FShirt2.jpg',category: Category.Shirts, dateSold: null, keyFeatures: ['Display: 6-Inch HD','CPU: 1.3 GHz Quad Core','Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'] },
      {id: 3,name: 'Sweat Shirt', quantity:7, description: '64GB Android 7.0',price: 77117,imgUrl:'shirts/FShirt2.jpg',category: Category.Shirts, dateSold: null, keyFeatures: ['Display: 6-Inch HD','CPU: 1.3 GHz Quad Core','Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'] },
      {id: 4,name: 'Winter Shirt', quantity:7, description: '64GB Android 7.0',price: 775437,imgUrl:'shirts/FShirt2.jpg',category: Category.Shirts, dateSold: null, keyFeatures: ['Display: 6-Inch HD','CPU: 1.3 GHz Quad Core','Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'] },
      {id: 5,name: 'Summer Shirt',quantity:7, description: '64GB Android 7.0',price: 77700,imgUrl:'shirts/FShirt2.jpg',category: Category.Shirts, dateSold: null, keyFeatures: ['Display: 6-Inch HD','CPU: 1.3 GHz Quad Core','Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'] },
    ];
  }

  getCategories(): Category[] {
      return this.categories;
  }
  getProducts(category: Category): Product[] {
    if (category === Category.Phones) {
      return this.phones;
    } else if (category === Category.Gowns) {
      return this.gowns;
    } else if (category === Category.Sneakers) {
      return this.sneakers;
    } else if (category === Category.Bags) {
      return this.bags;
    } else if (category === Category.Shirts) {
      return this.shirts;
    } else if (category === Category.Laptops) {
      return this.laptops;
    }
  }
  getProductById(category: Category, id: number): Product {
    if (category === Category.Phones) {
      const phone = this.phones.find( ph => ph.id === id);
      return phone;
    } else if (category === Category.Gowns) {
      const gown = this.gowns.find( gow => gow.id === id);
      return gown;
    } else if (category === Category.Sneakers) {
      const sneakers = this.sneakers.find(sneaker => sneaker.id === id);
      return sneakers;
    } else if (category === Category.Bags) {
      const bags = this.bags.find(bag => bag.id === id);
      return bags;
    } else if (category === Category.Shirts) {
      const shirts = this.shirts.find(shirt => shirt.id === id);
      return shirts;
    } else if (category === Category.Laptops) {
      const shirts = this.laptops.find(laptop => laptop.id === id);
      return shirts;
    }
  }
  addToCart(item: Product ){
      if (item) {
        this.cartItems.push(item);
      }
  }
  getCartItems(): Product[] {
    return this.cartItems;
  }

}
