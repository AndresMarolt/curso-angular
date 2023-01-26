import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InscriptionsPageComponent } from './inscriptions-page.component';

const routes: Routes = [
  {
    path: 'inscripciones',
    component: InscriptionsPageComponent
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
export class InscriptionsPageRoutingModule { }
