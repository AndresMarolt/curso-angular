import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDetailPageRoutingModule } from './course-detail-page-routing.module';
import { CourseDetailPageComponent } from './course-detail-page.component';

@NgModule({
  declarations: [CourseDetailPageComponent],
  imports: [
    CommonModule,
    CourseDetailPageRoutingModule
  ],
  exports: [
    CourseDetailPageComponent
  ]
})
export class CourseDetailPageModule { }
