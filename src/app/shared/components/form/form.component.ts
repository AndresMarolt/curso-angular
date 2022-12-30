import { Component, Input, OnChanges, OnInit, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Student } from 'src/app/interfaces/student-interface';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit, OnChanges {
  public form: FormGroup

  @Input() mode: string;
  @Input() element: any;

  @Output() modeEventForm = new EventEmitter<string>();
  @Output() sendStudentEvent = new EventEmitter<Student>();
  
  constructor(
    private fb: FormBuilder
    ) {  }
    
    
  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      grade: ['', [Validators.required]]
    })
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.mode?.currentValue === 'Editar' || changes.element?.currentValue ) {
      this.form.patchValue(this.element)
    }
  }
  
  submit(student: Student): void {
    this.sendStudentEvent.emit(student);
    this.form.reset();
    this.sendMode('Crear')
  }

  sendMode(mode: string) {
    this.modeEventForm.emit(mode);
    this.form.reset();
  }

}
