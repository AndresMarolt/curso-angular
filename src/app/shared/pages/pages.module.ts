import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from 'src/app/pages/admin/dashboard-page/dashboard-page.component';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { CourseDetailPageComponent } from './course-detail-page/course-detail-page.component';
import { StudentsPageComponent } from './admin/students-page/students-page.component';
import { CoursesPageComponent } from './admin/courses-page/courses-page.component';


@NgModule({
  declarations: [DashboardPageComponent, HomeComponent, CourseDetailPageComponent, StudentsPageComponent, CoursesPageComponent],
  imports: [
    ComponentsModule,
    CommonModule
  ], exports: [
    DashboardPageComponent
  ]
})
export class PagesModule { }
