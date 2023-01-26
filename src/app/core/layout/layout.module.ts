import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { PagesModule } from '../pages/pages.module';
import { RouterModule } from '@angular/router';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AppRoutingModule } from 'src/app/shared/app-routing.module';
import { AdminLayoutModule } from './admin-layout/admin-layout.module';
import { AppLayoutModule } from './app-layout/app-layout.module';
import { AdminLoginLayoutComponent } from './admin-login-layout/admin-login-layout.component';

@NgModule({
  declarations: [
    AdminLoginLayoutComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    PagesModule,
    RouterModule,
    AppRoutingModule,
    AdminLayoutModule,
    AppLayoutModule
  ], exports: [
    AdminLayoutComponent,
    AppLayoutComponent
  ]
})
export class LayoutModule { }
