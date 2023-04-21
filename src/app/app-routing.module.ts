import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './features/sell/components/home/home.component';
import { SellPageComponent } from './features/sell/pages/sell-page/sell-page.component';
import { DetailsPageComponent } from './features/sell/pages/details-page/details-page.component';
import { LoginPageComponent } from './features/sell/components/login-page/login-page.component';
import { AuthGuardGuard } from './shared/guards/auth-guard.guard';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "produtos", component: SellPageComponent, canActivate: [AuthGuardGuard] },
  { path: "login", component: LoginPageComponent},
  { path: "product-details/:productId", component: DetailsPageComponent, canActivate: [AuthGuardGuard] }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}


