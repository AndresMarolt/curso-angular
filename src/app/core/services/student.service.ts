import { Injectable } from '@angular/core';
import { Student } from '../../interfaces/student-interface';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  // MOCK
  public students: Student[] = [
    {id: 1, name: 'Fernando', surname: 'Sánchez', email: 'fsanchez@gmail.com', course: 'Node.js'},
    {id: 2, name: 'Rodrigo', surname: 'Salgueiro', email: 'fsanchez@gmail.com', course: 'Node.js'},
    {id: 3, name: 'Roberto', surname: 'Esipnosa', email: 'fsanchez@gmail.com', course: 'Node.js'},
    {id: 4, name: 'Pablo', surname: 'Ferreyra', email: 'fsanchez@gmail.com', course: 'Node.js'},
    {id: 5, name: 'Hernán', surname: 'Fernández', email: 'fsanchez@gmail.com', course: 'Node.js'},
  ]
  public element: Student;

  private studentsSubject: BehaviorSubject<Student[]> = new BehaviorSubject(this.students);
  public students$: Observable<Student[]> = this.studentsSubject.asObservable();

  private modeSubject: BehaviorSubject<string> = new BehaviorSubject('Crear');
  public mode$: Observable<string> = this.modeSubject.asObservable();
  
  constructor() {
  }

  createStudent(student: Student): void {
    let newId = this.students.length + 1;
    this.students = [...this.students, {id: newId, name: student.name, surname: student.surname, email: student.email, course: student.course}]
    localStorage.setItem('students', JSON.stringify(this.students));

    this.studentsSubject.next(this.students);
  }

  updateStudent(student: Student): void {
    this.students = this.students.map(stu => this.element.id === stu.id ? { ...stu, ...student } : stu);
    localStorage.setItem('students', JSON.stringify(this.students));

    this.studentsSubject.next(this.students);
  }

  deleteStudent(student: Student): void {
    this.students = this.students.filter(stu => student.id !== stu.id);
    localStorage.setItem('students', JSON.stringify(this.students));

    this.studentsSubject.next(this.students)
  }

  setModeObservable(mode: string): void {
    this.modeSubject.next(mode);
  }

  setElement(element: Student): void {
    this.element = element;
  }
}
