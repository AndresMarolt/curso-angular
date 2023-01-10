import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { MaterialModule } from '../modules/material.module';
import { PagesModule } from '../pages/pages.module';
import { RouterModule } from '@angular/router';
import { AppLayoutComponent } from './app-layout/app-layout.component';

@NgModule({
  declarations: [AdminLayoutComponent, AppLayoutComponent],
  imports: [
    CommonModule,
    MaterialModule,
    PagesModule,
    RouterModule
  ], exports: [
    AdminLayoutComponent,
    AppLayoutComponent
  ]
})
export class LayoutModule { }
