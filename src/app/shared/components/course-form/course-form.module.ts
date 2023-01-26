import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseFormComponent } from './course-form.component';
import { MaterialModule } from '../../modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CourseFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    CourseFormComponent
  ]
})
export class CourseFormModule { }
