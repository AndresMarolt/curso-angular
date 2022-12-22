import { Component, Input, OnChanges, OnInit, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DataInterface } from 'src/app/interfaces/data-interface';

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

  public add(): void {
    if( localStorage.getItem('students') ) {
      let existingStudents = localStorage.getItem('students');
      if(typeof existingStudents === 'string') {
        let students = JSON.parse(existingStudents);
        this.form.value.id = students?.length;
        students.push(this.form.value);
        localStorage.setItem('students', JSON.stringify(students));
      }
    } else {
      this.form.value.id = 0;
      localStorage.setItem('students', JSON.stringify([this.form.value]));
    }
  }

  public update(): void {
    let existingStudents = JSON.parse(localStorage.getItem('students') || '{}');
    let updatedStudent = existingStudents.find((e: any) => e.id === this.element.id);
    updatedStudent.name = this.form.value.name;
    updatedStudent.surname = this.form.value.surname;
    updatedStudent.grade = this.form.value.grade;

    console.log(updatedStudent);
    
    localStorage.setItem('students', JSON.stringify(existingStudents))
  }
  
  public submit(): void {
    console.log("ENTRA A SUBMIT");
    this.mode === 'Crear' ? this.add() : this.update();
  }

  public fillForm(element: DataInterface): void {
    if(this.mode === 'Editar') {
      this.form = this.fb.group({
        name: [element?.name, [Validators.required]],
        surname: [element?.surname, [Validators.required]],
        grade: [element?.grade, [Validators.required]]
      })
    }
  }

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
      this.fillForm(this.element);
    }
  }

  sendMode(mode: string) {
    console.log("ENTRA A SENDMODE");
    
    this.modeEventForm.emit(mode);
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      grade: ['', [Validators.required]]
    })
  }

}
