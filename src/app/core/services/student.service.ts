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
    this.getStudentsFromAPI().subscribe(students => {
      this.studentsSubject.next(students);
    })
  }

  getStudentsFromAPI(): Observable<Student[]> {
    return this.httpClient.get<Student[]>('https://63cc20169b72d2a88e0893c6.mockapi.io/alumnos');
  }

  getValue(): any {
    return this.studentsSubject.getValue();
  }

  createStudent(student: Student): void {
    let newId = this.studentsSubject.getValue().length + 1;
    let newStudent = {...student, id: newId, commissionId: null};
    let newList = this.studentsSubject.getValue();
    
    this.httpClient.post('https://63cc20169b72d2a88e0893c6.mockapi.io/alumnos', newStudent).subscribe(_ => {
      newList.push(newStudent);

      console.log("ENVÍO");
      console.log(newList);
      
      this.studentsSubject.next(newList);
    })
  }

  updateStudent(student: Student): void {
    let updatedStudent = this.studentsSubject.getValue().find(stu => stu.id === student.id);
    updatedStudent = {...updatedStudent, ...student}
    
    this.httpClient.put(`https://63cc20169b72d2a88e0893c6.mockapi.io/alumnos/${student.id}`, updatedStudent).subscribe(_ => {
      let newList = this.studentsSubject.getValue().map(stu => stu.id === updatedStudent!.id ? updatedStudent! : stu);
      this.studentsSubject.next(newList)
    })
  }

  deleteStudent(student: Student): void {
    this.httpClient.delete(`https://63cc20169b72d2a88e0893c6.mockapi.io/alumnos/${student.id}`).subscribe(_ => {
      let newList = this.studentsSubject.getValue().filter(stu => stu.id !== student.id);
      this.studentsSubject.next(newList);
    })
  }

  setModeObservable(mode: string): void {
    this.modeSubject.next(mode);
  }

  setElement(element: Student): void {
    this.element = element;
  }
}
