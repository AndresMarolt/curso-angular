import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageModule } from './dashboard-page/dashboard-page.module';
import { StudentsPageModule } from './students-page/students-page.module';
import { CoursesPageModule } from './courses-page/courses-page.module';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { StudentsPageComponent } from './students-page/students-page.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { InscriptionsPageModule } from './inscriptions-page/inscriptions-page.module';
import { LoginPageModule } from '../admin-login/login-page/login-page.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    DashboardPageModule,
    StudentsPageModule,
    CoursesPageModule,
    InscriptionsPageModule,
    LoginPageModule
  ],
  exports: [
    DashboardPageComponent,
    StudentsPageComponent,
    CoursesPageComponent
  ]
})
export class AdminPagesModule { }
