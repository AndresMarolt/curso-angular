import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { AdminPagesModule } from './admin/admin-pages.module';
import { AppModule } from 'src/app/app.module';
import { AppPagesModule } from './app/app-pages.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    PipesModule,
    AdminPagesModule,
    AppPagesModule,
    ComponentsModule,
  ],
})
export class PagesModule { }
