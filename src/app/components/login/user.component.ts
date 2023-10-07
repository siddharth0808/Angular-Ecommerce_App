import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpserviceService } from '../../service/httpservice.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() data: any;
  public userImg = "assets/images/bacground.jpg"
  public hide = true;
  public loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,

    ])
  })
  constructor(private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private httpservice: HttpserviceService) { }

    
    ngOnInit(): void { 
    }
    
    onLogin(form: NgForm) {
      if (form.value['email'] == "" && form.value['password'] == "") {
        this.openSnackBar("Please Enter Id/Password", "OK");
      }
      else if (form.value['email'] !== "" && form.value['password'] !== "") {
        let res = this.httpservice.checkValidation(form.value);
        if (res) {
        this.openSnackBar("Login Successfully", "OK");
        this.router.navigate(['welcome'], { relativeTo: this.route });
      }
      else {
        this.openSnackBar("Invalid Id/Password Or User does not exist", "OK");
      }
    }
    
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }


}
