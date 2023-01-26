import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsListComponent } from './students-list.component';
import { MaterialModule } from '../../modules/material.module';
import { PipesModule } from '../../pipes/pipes.module';


@NgModule({
  declarations: [StudentsListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    PipesModule
  ],
  exports: [
    StudentsListComponent
  ]
})
export class StudentsListModule { }
