import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { RoutingModule } from './modules/routing.module';
import { StudentService } from './services/student.service';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    RoutingModule,
    ComponentsModule,

  ], providers: [
    StudentService,
  ]
})

export class CoreModule { }
