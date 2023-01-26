import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginLayoutComponent } from './admin-login-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLoginLayoutComponent,
    loadChildren: () => import('../../pages/admin-login/login-page/login-page.module').then(m => m.LoginPageModule)
  }
] 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminLoginLayoutRoutingModule { }
