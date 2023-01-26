import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionFormComponent } from './inscription-form.component';
import { MaterialModule } from '../../modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../../pipes/pipes.module';



@NgModule({
  declarations: [InscriptionFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule
  ],
  exports: [
    InscriptionFormComponent
  ]
})
export class InscriptionFormModule { }
