import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CartItems } from '../../interface/CartItems';

@Component({
  selector: 'app-view-item-detail-dialog',
  templateUrl: './view-item-detail-dialog.component.html',
  styleUrls: ['./view-item-detail-dialog.component.scss']
})
export class ViewItemDetailDialogComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<ViewItemDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CartItems) {}



  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
