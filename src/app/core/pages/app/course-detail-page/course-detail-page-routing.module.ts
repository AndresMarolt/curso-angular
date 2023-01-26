import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDetailPageComponent } from './course-detail-page.component';
import { Routes, RouterModule, Router } from '@angular/router';

const routes: Routes = [
  {
    path: 'courses/:course',
    component: CourseDetailPageComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CourseDetailPageRoutingModule { }
