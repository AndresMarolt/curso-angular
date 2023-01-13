import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../shared/app-routing.module';
import { StudentService } from './services/student.service';
import { ComponentsModule } from '../shared/components/components.module';
import { LayoutModule } from './layout/layout.module';
import { PagesModule } from './pages/pages.module';
import { CoursesService } from './services/courses.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    ComponentsModule,
    LayoutModule,
    PagesModule
  ], providers: [
    StudentService,
    CoursesService,
  ],
  exports: [
    LayoutModule
  ]
})

export class CoreModule { }
