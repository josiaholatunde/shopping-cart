import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-navbar-detail',
  templateUrl: './navbar-detail.component.html',
  styleUrls: ['./navbar-detail.component.css']
})
export class NavbarDetailComponent implements OnInit {

  @Input() categories;
  constructor() { }

  ngOnInit() {
    for(let i = 0; i < this.categories.length; i++) {
      this.categories[i] = Category[i];
      console.log(this.categories[i]);
    }

  }

}
