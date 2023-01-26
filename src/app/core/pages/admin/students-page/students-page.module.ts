import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsPageComponent } from './students-page.component';
import { FormModule } from 'src/app/shared/components/form/form.module';
import { StudentsListModule } from 'src/app/shared/components/students-list/students-list.module';
import { StudentsPageRoutingModule } from './students-page-routing.module';


@NgModule({
  declarations: [StudentsPageComponent],
  imports: [
    CommonModule,
    FormModule,
    StudentsListModule,
    StudentsPageRoutingModule
  ],
  exports: [
    StudentsPageComponent
  ]
})
export class StudentsPageModule { }
