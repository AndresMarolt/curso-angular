import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { Student } from 'src/app/interfaces/student-interface';
import { StudentService } from 'src/app/core/services/student.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})

export class DashboardPageComponent {

  constructor() { }
}