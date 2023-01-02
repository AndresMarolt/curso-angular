import { Injectable } from '@angular/core';
import { Student } from '../interfaces/student-interface';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  public students: Student[];
  private studentsSubject: Subject<Student[]> = new Subject();

  constructor() {
    this.students = JSON.parse(localStorage.getItem('students') || '[]');
  }

  createStudent(student: Student): void {
    let newId = this.students.length + 1;
    this.students = [...this.students, {id: newId, name: student.name, surname: student.surname, grade: student.grade}]
    localStorage.setItem('students', JSON.stringify(this.students));

    this.studentsSubject.next(this.students);
  }

  getStudents(): Observable<Student[]> {
    return this.studentsSubject.asObservable();
  } 
}
