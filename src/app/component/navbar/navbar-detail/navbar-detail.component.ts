import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-navbar-detail',
  templateUrl: './navbar-detail.component.html',
  styleUrls: ['./navbar-detail.component.scss']
})
export class NavbarDetailComponent implements OnInit {

  @Input() categories: Category[];
  constructor() { }

  ngOnInit() {
  }

}
