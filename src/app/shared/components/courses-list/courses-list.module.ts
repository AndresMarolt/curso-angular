import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './courses-list.component';
import { MaterialModule } from '../../modules/material.module';


@NgModule({
  declarations: [CoursesListComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CoursesListComponent
  ]
})
export class CoursesListModule { }
