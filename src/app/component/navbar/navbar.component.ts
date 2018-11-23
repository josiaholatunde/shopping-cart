import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  categories: Category[];
  constructor(private categoryService: ProductService) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
    console.log(this.categories);
  }

}
