import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpserviceService } from '../../service/httpservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public userImg = "assets/images/bacground.jpg";
  public hide = true;
  constructor(private snackBar:MatSnackBar,
    private httpService:HttpserviceService) { }
  public signUpForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    mobile: new FormControl('', [
      Validators.required,
    ]),
    address: new FormControl('', [
      Validators.required,
    ]),
    password: new FormControl('', [
      Validators.required,

    ]),
    rePassword: new FormControl('', [
      Validators.required,
    ]),
  })
  ngOnInit(): void {
  }
  onSignUp(form: NgForm) {
    if (form.value.mobile.length > 10 || form.value.mobile.length < 10){
      this.openSnackBar("Please Enter valid mobile number", "Thanks");

    }
    else if(form.value.password.length < 6){
      this.openSnackBar("Password length must be 6", "Thanks");

    }
    else if(form.value.password !== form.value.rePassword){
      this.openSnackBar("Password does not match", "Thanks");

    }
    else if(form.value !== ""){
      let res =this.httpService.registerUser(form.value);
      if (res) {
        this.openSnackBar("Resgister Successfully", "OK");
      }
      else {
        this.openSnackBar("Not Register", "OK");
      }
    }

  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }
}
