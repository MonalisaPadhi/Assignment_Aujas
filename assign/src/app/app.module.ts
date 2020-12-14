import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InventoryComponent } from './inventory/inventory.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { InvoiceComponent } from './invoice/invoice.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InventoryComponent,
    DashboardComponent,
    // InvoiceComponent,
    HelpComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
     FormsModule,
    RouterModule.forRoot([
    {path : '' , component : HomeComponent},
    {path: 'inventory', component : InventoryComponent},
    {path: 'dashboard', component: DashboardComponent},
   // {path: 'invoice', component: InvoiceComponent},
    {path: 'help', component : HelpComponent},
  ])
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
