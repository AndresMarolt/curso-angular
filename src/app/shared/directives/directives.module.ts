import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingsSizeDirective } from './headings-size.directive';


@NgModule({
  declarations: [HeadingsSizeDirective],
  imports: [
    CommonModule
  ], exports: [
    HeadingsSizeDirective
  ]
})
export class DirectivesModule { }
