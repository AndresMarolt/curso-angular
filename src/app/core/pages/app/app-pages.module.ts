import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { CourseDetailPageModule } from './course-detail-page/course-detail-page.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    CourseDetailPageModule
  ]
})
export class AppPagesModule { }
