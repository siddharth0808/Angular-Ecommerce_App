import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicCategoryComponent } from './electronic-category.component';

describe('ElectronicCategoryComponent', () => {
  let component: ElectronicCategoryComponent;
  let fixture: ComponentFixture<ElectronicCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronicCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
