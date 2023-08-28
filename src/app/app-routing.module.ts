import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'home', canActivate: [authGuard], children: [
      { path: '', pathMatch: 'full', component: HomeComponent },
      { path: ':window', pathMatch: 'full', component: HomeComponent }
    ]
  },
  { path: 'login', pathMatch: 'full', component: LoginComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
