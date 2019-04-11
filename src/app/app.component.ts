import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CategoryService } from './services/category.service';
import { Category } from './models/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fashionStudio';
  categories: Category[];
  constructor(private categoryService: CategoryService){}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(res => {
      this.categories = res;
    });
   /*  const body = document.getElementsByTagName('body')[0];
    body.addEventListener('click', () => {
      const sideBar = document.getElementById('side-bar');
      sideBar.classList.add('d-non');
    }); */
  }

}
