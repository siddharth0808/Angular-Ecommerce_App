import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/login/user.component';
import { FormsModule }   from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import { AgGridModule } from 'ag-grid-angular';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { SidenaveComponent } from './components/sidenave/sidenave.component';
import { HttpClientModule } from '@angular/common/http'
import {MatBadgeModule} from '@angular/material/badge';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ViewCartComponent } from './components/view-cart/view-cart.component';
import { ViewItemDetailDialogComponent } from './components/view-item-detail-dialog/view-item-detail-dialog.component';
import {MatRippleModule} from '@angular/material/core';
import { MensCategoryComponent } from './components/category/mens-category/mens-category.component';
import { WomensCategoryComponent } from './components/category/womens-category/womens-category.component';
import { ElectronicCategoryComponent } from './components/category/electronic-category/electronic-category.component';
import { JeweleryCategoryComponent } from './components/category/jewelery-category/jewelery-category.component';
import { AddNewItemComponent } from './components/add-new-item/add-new-item.component';
import {MatSelectModule} from '@angular/material/select';
import { AddAddressComponent } from './components/add-address/add-address.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HeaderFooterComponent } from './components/header-footer/header-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignupComponent,
    AboutusComponent,
    ContactusComponent,
    HomeComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    SidenaveComponent,
    ViewCartComponent,
    ViewItemDetailDialogComponent,
    MensCategoryComponent,
    WomensCategoryComponent,
    ElectronicCategoryComponent,
    JeweleryCategoryComponent,
    AddNewItemComponent,
    AddAddressComponent,
    HeaderFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDialogModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    HttpClientModule,
    MatBadgeModule,
    ScrollingModule,
    FlexLayoutModule,
    MatTabsModule,
    MatSnackBarModule,
    MatRippleModule,
    MatSelectModule,
    MatTooltipModule,
    CarouselModule,
    AgGridModule.withComponents([WelcomeComponent])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
