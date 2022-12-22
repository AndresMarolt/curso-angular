import { Pipe, PipeTransform } from '@angular/core';
import { DataInterface } from '../interfaces/data-interface';

@Pipe({
  name: 'studentsNamesPipe'
})
export class StudentsNamesPipePipe implements PipeTransform {

  transform(value: DataInterface, ...args: unknown[]): string {
    return `${value.surname.toUpperCase()}, ${value.name[0].toUpperCase() + value.name.slice(1).toLowerCase()}`;
  }
}
