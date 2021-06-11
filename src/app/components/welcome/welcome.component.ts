import { Component, OnInit ,ViewEncapsulation} from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { HttpserviceService } from 'src/app/service/httpservice.service';
import { ViewItemDetailDialogComponent } from '../view-item-detail-dialog/view-item-detail-dialog.component';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WelcomeComponent implements OnInit {

  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;
  constructor(private http:HttpserviceService,public dialog: MatDialog) {

  }
  public userImg = "assets/images/bacground.jpg"

  public items:{};

  ngOnInit(): void {
    this.http.getItems().subscribe(data =>{
      this.items=data;
    })
  }
  public count:any=0;
  addToCart(data:any){
    this.http.addToCart(data);
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
