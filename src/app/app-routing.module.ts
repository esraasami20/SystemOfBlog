import { ModeratorComponent } from './Components/moderator/moderator.component';
import { AdminComponent } from './Components/admin/admin.component';
import { HomeComponent } from './Components/home/home.component';
import { LooginComponent } from './Components/loogin/loogin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'moderator',
    component: ModeratorComponent,
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
