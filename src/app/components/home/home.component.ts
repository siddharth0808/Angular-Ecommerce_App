import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpserviceService } from 'src/app/service/httpservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeBackImg :string="assets/images/bacground.jpg";
 
    constructor(private http:HttpserviceService) { }
  public items:{};
  ngOnInit(): void {
    this.http.getItems().subscribe(data =>{
      this.items=data;
    })
  }


}
