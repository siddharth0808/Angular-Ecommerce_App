import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewItemDetailDialogComponent } from './view-item-detail-dialog.component';

describe('ViewItemDetailDialogComponent', () => {
  let component: ViewItemDetailDialogComponent;
  let fixture: ComponentFixture<ViewItemDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewItemDetailDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewItemDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
