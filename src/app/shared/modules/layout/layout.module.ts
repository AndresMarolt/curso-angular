import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageWrapper } from '../../layout/pageWrapper/page-wrapper.component';
import { MaterialModule } from '../material/material.module';
import { PagesModule } from '../pages/pages.module';

@NgModule({
  declarations: [PageWrapper],
  imports: [
    CommonModule,
    PagesModule,
    MaterialModule
  ], exports: [
    PageWrapper
  ]
})
export class LayoutModule { }
