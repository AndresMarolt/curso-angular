import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataInterface } from 'src/app/interfaces/data-interface';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})

export class StudentsListComponent implements OnInit {

  displayedColumns: string[] = ['ID', 'Alumno', 'Promedio', 'Editar', 'Eliminar'];
  data = JSON.parse(localStorage.getItem('students') || '{}')

  @Output() modeEvent = new EventEmitter<string>();
  @Output() elementToEdit = new EventEmitter<DataInterface>;

  ngOnInit(): void {
    
  }

  delete(element: any): void {
    let students = JSON.parse(localStorage.getItem('students') || '{}');
    let index = students.findIndex((e: any) => e.id === element.id);
    
    students.splice(index, 1);
    localStorage.setItem('students', JSON.stringify(students));
  }

  // edit(element: any): void {
  //   let students = JSON.parse(localStorage.getItem('students') || '{}');
  //   let selectedElement = students.find((e: any) => e.id === element.id);

  // }

  sendMode(mode: string, element: DataInterface) {
    this.modeEvent.emit(mode);
    this.elementToEdit.emit(element)
  }

}