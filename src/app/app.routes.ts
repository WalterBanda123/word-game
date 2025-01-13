import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { protectGuard } from './protect.guard';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
  {
    path: "", redirectTo: "/home", pathMatch: "full",
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: "main", component: MainComponent, canActivate: [protectGuard]
  },
  {
    path: "signup", component: SignupComponent
  }
];
