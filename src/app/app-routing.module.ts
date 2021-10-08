import { LooginComponent } from './Components/loogin/loogin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:LooginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
