import { RegisterComponent } from './Components/register/register.component';
import { ModeratorComponent } from './Components/moderator/moderator.component';
import { AdminComponent } from './Components/admin/admin.component';
import { HomeComponent } from './Components/home/home.component';
import { LooginComponent } from './Components/loogin/loogin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/Auth/Auth.guard';
import { VistorComponent } from './Components/vistor/vistor.component';
// import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

const routes: Routes = [
  {
    canActivate: [AuthGuard],
    path: 'home',
    component: HomeComponent,
  },
  {
    canActivate: [AuthGuard],
    path: 'admin',
    component: AdminComponent,
  },
  {
    canActivate: [AuthGuard],
    path: 'moderator',
    component: ModeratorComponent,
  },
  {
    path: 'login-admin',
    component: RegisterComponent,
  },
  {
    path: 'login-moderator',
    component: VistorComponent,
  },
  {
    path: '',
    component: LooginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
