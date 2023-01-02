import { Injectable } from '@angular/core';
import { Student } from '../interfaces/student-interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[];
  private studentsSubject: Subject<Student[]> = new Subject();

  constructor() {
    this.students = JSON.parse(localStorage.getItem('students') || '[]');
  }

  addStudent(student: Student): void {
    
  }
}
