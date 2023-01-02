import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../../components/form/form.component';
import { StudentsListComponent } from '../../components/students-list/students-list.component';


@NgModule({
  declarations: [FormComponent, StudentsListComponent],
  imports: [
    CommonModule
  ], exports: [
    FormComponent,
    StudentsListComponent
  ]
})
export class ComponentsModule { }
