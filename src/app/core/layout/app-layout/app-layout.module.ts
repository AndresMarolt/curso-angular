import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './app-layout.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { RouterModule } from '@angular/router';
import { AppLayoutRoutingModule } from './app-layout-routing.module';


@NgModule({
  declarations: [AppLayoutComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    AppLayoutRoutingModule
  ],
  exports: [
    AppLayoutComponent
  ]
})
export class AppLayoutModule { }
