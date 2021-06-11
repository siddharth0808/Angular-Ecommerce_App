import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpserviceService } from './service/httpservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ecommerce';
  public itemCartCount=0;
  constructor(private httpservice:HttpserviceService,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    ){
  }
  ngOnInit(): void {

  }
  viewCart(){
    this.itemCartCount= this.httpservice.count;
    if(this.itemCartCount === 0){
      this.openSnackBar("No items available in cart", "OK");
    }else{
      this.router.navigate(['login/welcome/view-cart'],{relativeTo:this.route});

    }
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
