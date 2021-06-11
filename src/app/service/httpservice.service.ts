import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../interface/user.module';
import { CartItems } from '../interface/CartItems';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
 user:User[] =[
   {
     id:1,
     name:"Siddarth Carpenter",
     email:"sid@gmail.com",
     mobile:8770126296,
     address:"Indore",
     password:"sid@123"
   },
 ];
 cartItems:CartItems[]=[];
 public name:string;
 public email:string;
 public count =0;
 constructor(private http:HttpClient) { }

  getItems():Observable<any>{
    return this.http.get("https://fakestoreapi.com/products")
  }
  checkValidation(data:any){
    let result = this.user.some(element => {
      if(data.email === element.email && data.password === element.password ){
        this.name = element.name;
        this.email=element.email;
        return true;
       }
    });
    if(result){
      return true;
    }else{
      return false;
    }

  }
  registerUser(data:any){
    this.user.push(data);

    return true;
  }
  addToCart(data:any){
    this.count++;
    this.cartItems.push(data);

  }
  getCartItems():Observable<any>{
    return this.http.get("this.cartItems");
  }
  getJeweleryItems():Observable<any>{
    return this.http.get("https://fakestoreapi.com/products/category/jewelery");
  }
  addNewItem(data:any):Observable<any>{
    return this.http.post("https://fakestoreapi.com/products", data);
  }
  removeItem(data:any){
    for(let i=0;i<this.cartItems.length;i++){
      if(data.id === this.cartItems[i].id){
        this.cartItems.splice(i);
        console.log(this.cartItems)
        console.log(data);
        break;
      }
    }
  }
}
