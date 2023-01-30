import { Injectable } from '@angular/core';
import { Student } from 'src/app/shared/interfaces/student-interface';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  // MOCK
  public element: Student;

  private studentsSubject: BehaviorSubject<Student[]> = new BehaviorSubject<Student[]>([]);
  public students$: Observable<Student[]> = this.studentsSubject.asObservable();

  private modeSubject: BehaviorSubject<string> = new BehaviorSubject('Crear');
  public mode$: Observable<string> = this.modeSubject.asObservable();
  
  constructor(
    private httpClient: HttpClient
  ) {
    this.getStudentsFromAPI().subscribe(stu => {
      this.studentsSubject.next(stu);
    })
  }

  getStudentsFromAPI(): Observable<Student[]> {
    return this.httpClient.get<Student[]>('https://63cc20169b72d2a88e0893c6.mockapi.io/alumnos');
  }

  createStudent(student: Student): void {
    let newId = this.studentsSubject.getValue().length + 1;
    let newStudent = {...student, id: newId, commissionId: null};
    let newList = this.studentsSubject.getValue();
    
    this.httpClient.post('https://63cc20169b72d2a88e0893c6.mockapi.io/alumnos', newStudent).subscribe(_ => {
      newList.push(newStudent);
      this.studentsSubject.next(newList);
    })
  }

  updateStudent(student: Student): Observable<Object> {
    let updatedStudent = this.studentsSubject.getValue().find(stu => stu.id === student.id);
    updatedStudent = {...updatedStudent, ...student}
    
    return this.httpClient.put(`https://63cc20169b72d2a88e0893c6.mockapi.io/alumnos/${student.id}`, updatedStudent)
  }

  deleteStudent(student: Student): Observable<Object> {
    return this.httpClient.delete(`https://63cc20169b72d2a88e0893c6.mockapi.io/alumnos/${student.id}`)
  }

  setModeObservable(mode: string): void {
    this.modeSubject.next(mode);
  }

  setElement(element: Student): void {
    this.element = element;
  }
}
