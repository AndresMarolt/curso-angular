import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Student } from 'src/app/interfaces/student-interface';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})

export class StudentsListComponent implements OnInit {

  displayedColumns: string[] = ['ID', 'Alumno', 'Promedio', 'Editar', 'Eliminar'];
  data = JSON.parse(localStorage.getItem('students') || '{}')

  @Input() students: any;

  @Output() modeEvent = new EventEmitter<string>();
  @Output() elementToEditEvent = new EventEmitter<Student>;
  @Output() elementToDeleteEvent = new EventEmitter<Student>;

  ngOnInit(): void {
    
  }

  delete(element: any): void {
    this.elementToDeleteEvent.emit(element);
}

  sendMode(mode: string, element: Student) {
    this.modeEvent.emit(mode);
    this.elementToEditEvent.emit(element)
  }

}