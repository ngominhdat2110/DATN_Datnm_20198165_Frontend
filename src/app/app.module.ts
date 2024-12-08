import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateCustomerComponent } from './components/customer/create-customer/create-customer.component';
import { FormsModule } from '@angular/forms';
import { UpdateCustomerComponent } from './components/customer/update-customer/update-customer.component';
import { CustomerDetailsComponent } from './components/customer/customer-details/customer-details.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CreateTheaterComponent } from './components/theaters/create-theater/create-theater.component';
import { TheaterDetailsComponent } from './components/theaters/theater-details/theater-details.component';
import { TheaterListComponent } from './components/theaters/theater-list/theater-list.component';
import { UpdateTheaterComponent } from './components/theaters/update-theater/update-theater.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent,
    CustomerDetailsComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    CreateTheaterComponent,
    TheaterDetailsComponent,
    TheaterListComponent,
    UpdateTheaterComponent,
    // DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,

    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
