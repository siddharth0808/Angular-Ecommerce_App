import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/login/user.component';
import { SignupComponent } from './components/signup/signup.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeComponent } from './components/home/home.component';
import {WelcomeComponent} from './components/welcome/welcome.component'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ViewCartComponent } from './components/view-cart/view-cart.component';
import { AddNewItemComponent } from './components/add-new-item/add-new-item.component';
const routes: Routes = [
  { path:"",redirectTo:"/home",pathMatch:"full"},
  { path:"home", component:HomeComponent },
  { path:"login",component:UserComponent },
  { path:"login/welcome", component:WelcomeComponent },
  { path:"signUp",component:SignupComponent },
  { path:"aboutUs",component:AboutusComponent },
  { path:"login/welcome/view-cart",component:ViewCartComponent },
  { path:"login/welcome/add-new-item",component:AddNewItemComponent },

  { path:"**",component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
