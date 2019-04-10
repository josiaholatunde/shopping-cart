import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignBrandCategoryFormComponent } from './assign-brand-category-form.component';

describe('AssignBrandCategoryFormComponent', () => {
  let component: AssignBrandCategoryFormComponent;
  let fixture: ComponentFixture<AssignBrandCategoryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignBrandCategoryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignBrandCategoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
