import { Component, OnChanges, OnInit, SimpleChanges, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/interfaces/student-interface';
import { StudentService } from 'src/app/core/services/student.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit, OnDestroy {
  
  public form: FormGroup;

  modeSubscription: Subscription;

  public mode: string;
  public element: Student;
  
  constructor(
      private fb: FormBuilder,
      private studentService: StudentService
    ) {
      this.form = this.fb.group({
        name: ['', [Validators.required]],
        surname: ['', [Validators.required]],
        email: ['', [Validators.required]],
        course: ['', [Validators.required]]
      })
  
      this.modeSubscription = this.studentService.mode$.subscribe(mode => {
        this.mode = mode;
        this.element = this.studentService.element;

        this.mode === 'Crear' ? this.form.reset() : this.form.patchValue(this.studentService.element)
      })
    }
      
  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    this.modeSubscription.unsubscribe();
  }
  
  submit(student: Student): void {
    this.mode === 'Crear' ? this.studentService.createStudent(student) : this.studentService.updateStudent(student)
    this.form.reset();
  }

  setMode(mode: string): void {
    this.studentService.setModeObservable(mode)
  }
}
