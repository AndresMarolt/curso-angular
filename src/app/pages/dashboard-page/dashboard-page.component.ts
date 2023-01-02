import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { Student } from 'src/app/interfaces/student-interface';
import { StudentService } from 'src/app/services/student.service';
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

  constructor(private studentService: StudentService) { }

  setMode(currentMode: any): void {
    this.mode = currentMode;
  }
  
  setElement(element: Student): void {
    this.element = element;
  }

  getStudent(student: Student): void {
    if(this.mode === 'Crear') {
      this.studentService.createStudent(student);
    } else if(this.mode === 'Editar') {
      this.updateStudent(student);
    }
  }

  

  updateStudent(student: Student): void {
    this.students = this.students.map(stu => this.element.id === stu.id ? { ...stu, ...student } : stu);
  }

  deleteStudent(student: Student): void {
    this.students = this.students.filter(stu => student.id !== stu.id);
    localStorage.setItem('students', JSON.stringify(this.students));
  }
}