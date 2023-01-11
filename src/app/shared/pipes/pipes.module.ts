import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsNamesPipePipe } from './students-names-pipe.pipe';


@NgModule({
  declarations: [StudentsNamesPipePipe],
  imports: [
    CommonModule
  ], exports: [
    StudentsNamesPipePipe
  ]
})
export class PipesModule { }
