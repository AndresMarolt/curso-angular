import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './admin/dashboard-page/dashboard-page.component';
import { HomeComponent } from './home/home.component';
import { CourseDetailPageComponent } from './course-detail-page/course-detail-page.component';
import { StudentsPageComponent } from './admin/students-page/students-page.component';
import { CoursesPageComponent } from './admin/courses-page/courses-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { StudentService } from '../services/student.service';
import { CoursesService } from '../services/courses.service';
import { CommissionService } from '../services/commission.service';
import { CommissionsPageComponent } from './admin/commissions-page/commissions-page.component';

@NgModule({
  declarations: [DashboardPageComponent, HomeComponent, CourseDetailPageComponent, StudentsPageComponent, CoursesPageComponent, CommissionsPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  exports: [
    DashboardPageComponent,
    HomeComponent,
    CourseDetailPageComponent,
    StudentsPageComponent,
    CoursesPageComponent
  ]
})
export class PagesModule { }
