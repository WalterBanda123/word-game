import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AuthComponent } from "./auth/auth.component"
import { protectGuard } from './protect.guard';

export const routes: Routes = [
  {
    path: "", redirectTo: "/account/auth", pathMatch: "full",
  },
  {
    path: 'account/auth', component: AuthComponent
  },
  {
    path: "main", component: MainComponent, canActivate: [protectGuard]
  },

];
