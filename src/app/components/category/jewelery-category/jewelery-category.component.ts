import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpserviceService } from 'src/app/service/httpservice.service';
import { ViewItemDetailDialogComponent } from '../../view-item-detail-dialog/view-item-detail-dialog.component';

@Component({
  selector: 'app-jewelery-category',
  templateUrl: './jewelery-category.component.html',
  styleUrls: ['./jewelery-category.component.scss']
})
export class JeweleryCategoryComponent implements OnInit {

  public items:{};
  constructor(private http:HttpserviceService,public dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.http.getJeweleryItems().subscribe(data =>{
      this.items=data;
    })
  }
  public count:any=0;
  addToCart(data:any){
    this.http.addToCart(data);
    console.log(data);
   }
   itemDetail(item:any){

      const dialogRef = this.dialog.open(ViewItemDetailDialogComponent, {
        width: '400px',
        data: {category:item.category,
          description:item.description,
          image:item.image,
          price:item.price,
          title:item.title
        }
      });


    }

}
