import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { MaterialModule } from '../modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { CoursesCardsComponent } from './courses-cards/courses-cards.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FormComponent, StudentsListComponent, CoursesCardsComponent, CourseFormComponent, CoursesListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    PipesModule,
    RouterModule
  ], exports: [
    FormComponent,
    StudentsListComponent,
    CoursesCardsComponent,
    CourseFormComponent,
    CoursesListComponent
  ]
})
export class ComponentsModule { }