import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { DashboardPageRoutingModule } from './dashboard-page-routing.module';

@NgModule({
  declarations: [DashboardPageComponent],
  imports: [
    CommonModule,
    PipesModule,
    MaterialModule,
    DashboardPageRoutingModule
  ],
  exports: [
    DashboardPageComponent
  ]
})
export class DashboardPageModule { }
