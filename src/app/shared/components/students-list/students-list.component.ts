import { Component, OnInit, Output, Input, EventEmitter, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Student } from '../../interfaces/student-interface';
import { StudentService } from 'src/app/core/services/student.service';
import { CommissionsService } from 'src/app/core/services/commissions.service';
import { CommissionInterface } from '../../interfaces/commission-interface';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})

export class StudentsListComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['ID', 'Alumno', 'Email', 'Comision', 'Editar', 'Eliminar'];

  studentsSubscription: Subscription;
  modeSubscription: Subscription;
  commissionSubscription: Subscription;

  public students: Student[];
  public commissions: CommissionInterface[];
  public mode: string;

  constructor(public studentService: StudentService, private commissionService: CommissionsService) { 
    this.studentsSubscription = this.studentService.students$.subscribe(students => {
      this.students = students;
    })

    this.commissionSubscription = this.commissionService.commissions$.subscribe(commissions => {
      this.commissions = commissions;
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
    this.commissionSubscription.unsubscribe();
  }

  delete(student: Student): void {
    this.studentService.deleteStudent(student);
    this.commissionService.deleteCommissionStudent(student.commissionId, student.id);
  }

  setMode(mode: string, element: Student) {
    this.studentService.setElement(element)
    this.studentService.setModeObservable(mode);
  }

}