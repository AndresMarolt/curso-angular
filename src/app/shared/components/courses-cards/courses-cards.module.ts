import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesCardsComponent } from './courses-cards.component';
import { MaterialModule } from '../../modules/material.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [CoursesCardsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    CoursesCardsComponent
  ]
})
export class CoursesCardsModule { }
