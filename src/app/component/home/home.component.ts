import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
count = 1;
  greyRightBtn: boolean;
  greyLeftBtn = true;
  constructor() { }

  ngOnInit() {

  }
  slideImageRight() {
  this.count += 1;
  if (this.greyLeftBtn) {
    this.greyLeftBtn = false;
  }
   const elems =  document.getElementsByClassName('flex');
   for (let index = 1; index < elems.length; index++) {
      elems[index].classList.add('d-none');
     if (index === this.count) {
       elems[index].classList.remove('d-none');
     }
   }
   if (this.count === elems.length) {
     this.greyRightBtn = true;
     this.greyLeftBtn = false;
   }
  }
  slideImageLeft() {
  this.count -= 1;
  if (this.greyRightBtn) {
    this.greyRightBtn = false;
  }
   const elems =  document.getElementsByClassName('flex');
   for (let index = 1; index < elems.length; index++) {
      elems[index].classList.add('d-none');
     if (index === this.count) {
       elems[index].classList.remove('d-none');
     }
   }
   if (this.count === 1) {
     this.greyLeftBtn = true;
     this.greyRightBtn = false;
   }
  }

}
