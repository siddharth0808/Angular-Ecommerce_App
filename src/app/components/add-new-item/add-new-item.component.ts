import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpserviceService } from 'src/app/service/httpservice.service';

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.scss']
})
export class AddNewItemComponent implements OnInit {

  constructor(private httpserveice:HttpserviceService) { }
  public newItemForm = new FormGroup({
    image: new FormControl('', [
      Validators.required,
    ]),
    title: new FormControl('', [
      Validators.required,
    ]),
    price: new FormControl('', [
      Validators.required,
    ]),
    description: new FormControl('', [
      Validators.required,
    ]),
    category: new FormControl('', [
      Validators.required,
    ]),
  })
  ngOnInit(): void {
  }
  addNewItem(data:NgForm){
    this.httpserveice.addNewItem(data.value).subscribe(data =>{
      console.log(data.value);
    });

  }
}
