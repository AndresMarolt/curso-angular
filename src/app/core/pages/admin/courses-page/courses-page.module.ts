import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesPageComponent } from './courses-page.component';
import { CourseFormModule } from 'src/app/shared/components/course-form/course-form.module';
import { CoursesListModule } from 'src/app/shared/components/courses-list/courses-list.module';
import { CoursesPageRoutingModule } from './courses-page-routing.module';


@NgModule({
  declarations: [CoursesPageComponent],
  imports: [
    CommonModule,
    CourseFormModule,
    CoursesListModule,
    CoursesPageRoutingModule
  ],
  exports: [
    CoursesPageComponent
  ]
})
export class CoursesPageModule { }
