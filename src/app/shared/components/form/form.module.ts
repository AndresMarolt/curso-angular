import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { MaterialModule } from '../../modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ], 
  exports: [
    FormComponent
  ]
})
export class FormModule { }
