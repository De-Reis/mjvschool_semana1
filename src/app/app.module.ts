
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SellModule } from './features/sell/sell.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SellModule,
    FormsModule


  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
