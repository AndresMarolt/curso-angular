import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { Student } from 'src/app/interfaces/student-interface';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})

export class DashboardPageComponent {
  public mode: string = 'Crear';
  public element: Student;

  students: Student[] = JSON.parse(localStorage.getItem('students') || '[]')

  constructor() { }

  setMode(currentMode: any): void {
    this.mode = currentMode;
  }
  
  setElement(element: Student): void {
    this.element = element;
  }

  getStudent(student: Student): void {
    if(this.mode === 'Crear') {
      this.createStudent(student);
    } else if(this.mode === 'Editar') {
      this.updateStudent(student);
    }
    localStorage.setItem('students', JSON.stringify(this.students));
  }

  createStudent(student: Student): void {
    let newId = this.students.length + 1;
    this.students = [...this.students, {id: newId, name: student.name, surname: student.surname, grade: student.grade}]
  }

  updateStudent(student: Student): void {
    this.students = this.students.map(stu => this.element.id === stu.id ? { ...stu, ...student } : stu);
  }

  deleteStudent(student: Student): void {
    this.students = this.students.filter(stu => student.id !== stu.id);
    localStorage.setItem('students', JSON.stringify(this.students));
  }
}