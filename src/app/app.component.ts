import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CategoryService } from './services/category.service';
import { Category } from './models/category';
import { StoreService } from './services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fashionStudio';
  categories: Category[];
  constructor(private categoryService: CategoryService, private store: StoreService) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(res => {
      this.categories = res;
    });
   /*  if (window.innerWidth > 768) {
     document.getElementById('nav-cen').classList.remove('d-none');
    } else {
      document.getElementById('nav-cen').classList.add('d-none');
    } */
  }

}
