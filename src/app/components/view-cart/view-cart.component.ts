import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpserviceService } from 'src/app/service/httpservice.service';
import { AddAddressComponent } from '../add-address/add-address.component';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss']
})
export class ViewCartComponent implements OnInit {

  constructor(private httpservice:HttpserviceService,
    public dialog: MatDialog) { }
  public items:any;
  public totalPrice:number=0;
  ngOnInit(): void {
    this.items=this.httpservice.cartItems;
    this.totalItemPrice();
  }
  totalItemPrice(){
  for(let i=0;i<this.items.length;i++){
    this.totalPrice = this.totalPrice+this.items[i].price;
  }
  }
  addAddress(){
    const dialogRef = this.dialog.open(AddAddressComponent, {
      width: '400px',

    });
  }
  removeItem(data:any){
    for(let i=0;i<this.items.length;i++){
      if(data.id === this.items[i].id){
        console.log(this.items.splice(i));
        console.log(this.items)

        break;
      }
    }
  }

}
