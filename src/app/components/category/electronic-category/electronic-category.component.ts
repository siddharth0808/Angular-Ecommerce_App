import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpserviceService } from 'src/app/service/httpservice.service';
import { ViewItemDetailDialogComponent } from 'src/app/components/view-item-detail-dialog/view-item-detail-dialog.component';

@Component({
  selector: 'app-electronic-category',
  templateUrl: './electronic-category.component.html',
  styleUrls: ['./electronic-category.component.scss']
})
export class ElectronicCategoryComponent implements OnInit {
  public items:{};
  constructor(private http:HttpserviceService,public dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.http.getItems().subscribe(data =>{
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
