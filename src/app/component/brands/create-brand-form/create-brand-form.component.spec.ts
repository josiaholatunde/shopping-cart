import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBrandFormComponent } from './create-brand-form.component';

describe('CreateBrandFormComponent', () => {
  let component: CreateBrandFormComponent;
  let fixture: ComponentFixture<CreateBrandFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBrandFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBrandFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
