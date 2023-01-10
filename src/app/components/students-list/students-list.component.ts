import { Component, OnInit, Output, Input, EventEmitter, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Student } from 'src/app/interfaces/student-interface';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})

export class StudentsListComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['ID', 'Alumno', 'Email', 'Curso', 'Editar', 'Eliminar'];

  studentsSubscription: Subscription;
  modeSubscription: Subscription;

  public students: Student[];
  public mode: string;

  constructor(public studentService: StudentService) { 
    this.studentsSubscription = this.studentService.students$.subscribe(students => {
      this.students = students;
    })
  
    this.modeSubscription = this.studentService.mode$.subscribe(mode => {
      this.mode = mode
    })
  }

  ngOnInit(): void {
  
  }

  ngOnDestroy(): void {
    this.studentsSubscription.unsubscribe();
    this.modeSubscription.unsubscribe();
  }

  delete(element: Student): void {
    this.studentService.deleteStudent(element);
  }

  setMode(mode: string, element: Student) {
    this.studentService.setElement(element)
    this.studentService.setModeObservable(mode);
  }

}