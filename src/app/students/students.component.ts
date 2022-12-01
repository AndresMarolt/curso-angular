import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})


export class StudentsComponent implements OnInit {
  public students: {name: string, surname: string, gradesAverage: number}[] = [
    { name: 'Luka', surname: 'Doncic', gradesAverage: 7.67 },
    { name: 'Raúl', surname: 'Neto', gradesAverage: 6.33 },
    { name: 'Mariana', surname: 'Fernandez', gradesAverage: 8 },
    { name: 'Darío', surname: 'Saric', gradesAverage: 8.33 },
    { name: 'Sofía', surname: 'Iñigo', gradesAverage: 6 },
];

  public showLoadStudent: boolean = false;

  public aux1: string = 'bla'
  public aux2: string = 'blabla'

  public form: any = {
    name: '',
    surname: '',
    gradesAverage: null
  }

  send(): void {
    console.log(this.form);
    this.students.push({ name: this.form.name, surname: this.form.surname, gradesAverage: this.form.gradesAverage })
    this.form = {name: '', surname: '', gradesAverage: null};
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}