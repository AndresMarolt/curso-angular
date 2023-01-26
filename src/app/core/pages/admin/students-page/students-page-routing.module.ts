import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StudentsPageComponent } from './students-page.component';

const routes: Routes = [
  {
    path: 'alumnos',
    component: StudentsPageComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class StudentsPageRoutingModule { }
