import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { MaterialModule } from '../modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoursesCardsComponent } from './courses-cards/courses-cards.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { RouterModule } from '@angular/router';
import { CourseFormModule } from './course-form/course-form.module';
import { CoursesCardsModule } from './courses-cards/courses-cards.module';
import { CoursesListModule } from './courses-list/courses-list.module';
import { FormModule } from './form/form.module';
import { StudentsListModule } from './students-list/students-list.module';
import { InscriptionFormComponent } from './inscription-form/inscription-form.component';
import { InscriptionFormModule } from './inscription-form/inscription-form.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginFormModule } from './login-form/login-form.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    CourseFormModule,
    CoursesCardsModule,
    CoursesCardsModule,
    CoursesListModule,
    FormModule,
    StudentsListModule,
    InscriptionFormModule,
    LoginFormModule
  ], exports: [
    FormComponent,
    StudentsListComponent,
    CoursesCardsComponent,
    CoursesListComponent,
    CourseFormComponent,
    InscriptionFormComponent
  ]
})
export class ComponentsModule { }
