import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeweleryCategoryComponent } from './jewelery-category.component';

describe('JeweleryCategoryComponent', () => {
  let component: JeweleryCategoryComponent;
  let fixture: ComponentFixture<JeweleryCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeweleryCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JeweleryCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
