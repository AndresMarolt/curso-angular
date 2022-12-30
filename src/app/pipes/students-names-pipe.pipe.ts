import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../interfaces/student-interface';

@Pipe({
  name: 'studentsNamesPipe'
})
export class StudentsNamesPipePipe implements PipeTransform {

  transform(value: Student, ...args: unknown[]): string {
    return `${value.surname.toUpperCase()}, ${value.name[0].toUpperCase() + value.name.slice(1).toLowerCase()}`;
  }
}
