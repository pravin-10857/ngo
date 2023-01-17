import { AppComponent } from './app.component';
import { AuthGuard } from './services/auth.guard';
import { ApageComponent } from './apage/apage.component';
import { DonationComponent } from './donation/donation.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdminComponent},
  {path:'donation',component:DonationComponent},
  {
    path: 'apage', component: ApageComponent ,canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
