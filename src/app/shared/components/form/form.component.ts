import { Component, OnChanges, OnInit, SimpleChanges, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Student } from '../../interfaces/student-interface';
import { StudentService } from 'src/app/core/services/student.service';
import { CommissionsService } from 'src/app/core/services/commissions.service';
import { CommissionInterface } from '../../interfaces/commission-interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit, OnDestroy {
  
  public form: FormGroup;
  public commissions: CommissionInterface[];

  modeSubscription: Subscription;

  public mode: string;
  public element: Student;
  
  constructor(
      private fb: FormBuilder,
      private studentService: StudentService,
      private commissionService: CommissionsService
    ) {
      this.form = this.fb.group({
        name: ['', [Validators.required]],
        surname: ['', [Validators.required]],
        email: ['', [Validators.required]],
        commissionId: ['', [Validators.required]]
      })
  
      this.modeSubscription = this.studentService.mode$.subscribe(mode => {
        this.mode = mode;
        this.element = this.studentService.element;

        this.mode === 'Crear' ? this.form.reset() : this.form.patchValue(this.studentService.element)
      })

      this.commissions = this.commissionService.commissions;
    }
      
  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    this.modeSubscription.unsubscribe();
  }

  submit(student: Student): void {
    if(this.mode === 'Crear') {
      let studentId = this.studentService.students.length + 1;
      let newStudent = {...student, id: studentId};
      console.log(newStudent);

      this.studentService.createStudent(newStudent)
      this.commissionService.addCommissionStudent(newStudent.commissionId, newStudent.id);
    } else {
      this.studentService.updateStudent(student);
    }

    this.form.reset();
  }

  setMode(mode: string): void {
    this.studentService.setModeObservable(mode)
  }
}
