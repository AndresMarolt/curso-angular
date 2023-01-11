import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { PagesModule } from '../pages/pages.module';
import { RouterModule } from '@angular/router';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AppRoutingModule } from 'src/app/shared/app-routing.module';

@NgModule({
  declarations: [AdminLayoutComponent, AppLayoutComponent],
  imports: [
    MaterialModule,
    CommonModule,
    PagesModule,
    RouterModule,
    AppRoutingModule
  ], exports: [
    AdminLayoutComponent,
    AppLayoutComponent
  ]
})
export class LayoutModule { }
