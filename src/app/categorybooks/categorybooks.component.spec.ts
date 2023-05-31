import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorybooksComponent } from './categorybooks.component';

describe('CategorybooksComponent', () => {
  let component: CategorybooksComponent;
  let fixture: ComponentFixture<CategorybooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorybooksComponent]
    });
    fixture = TestBed.createComponent(CategorybooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
