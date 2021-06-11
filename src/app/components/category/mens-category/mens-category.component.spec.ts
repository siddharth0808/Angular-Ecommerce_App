import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensCategoryComponent } from './mens-category.component';

describe('MensCategoryComponent', () => {
  let component: MensCategoryComponent;
  let fixture: ComponentFixture<MensCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
