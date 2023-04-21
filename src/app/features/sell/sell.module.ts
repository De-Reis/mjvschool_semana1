import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { SellPageComponent } from './pages/sell-page/sell-page.component';
import { PrincipalComponent } from 'src/app/features/sell/components/principal/principal.component';
import { ContatoComponent } from './components/contato/contato.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    PrincipalComponent,
    ProductsComponent,
    SellPageComponent,
    ContatoComponent,
    DetailsPageComponent,
    LoginPageComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule

  ],

  exports: [
    SellPageComponent,
    DetailsPageComponent,

  ]

})
export class SellModule { }
