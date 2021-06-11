import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpserviceService } from 'src/app/service/httpservice.service';

@Component({
  selector: 'app-sidenave',
  templateUrl: './sidenave.component.html',
  styleUrls: ['./sidenave.component.scss']
})
export class SidenaveComponent implements OnInit {
  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string="white";
  @Input() data:any;
  public name:string
  public email:string;
  constructor(private httpservice: HttpserviceService,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.name = this.httpservice.name;
    this.email =this.httpservice.email
  }
  logout()
{
  this.router.navigate(['../../'],{relativeTo:this.route});
  this.openSnackBar("Logout Successfully", "OK");

}
openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action);
}
addNew(){
  this.router.navigate(['add-new-item'],{relativeTo:this.route});
}
}
