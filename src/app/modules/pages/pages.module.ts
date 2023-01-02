import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from 'src/app/pages/dashboard-page/dashboard-page.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [DashboardPageComponent],
  imports: [
    ComponentsModule,
    CommonModule
  ], exports: [
    DashboardPageComponent
  ]
})
export class PagesModule { }
