import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { CourseInterface } from 'src/app/shared/interfaces/course-interface';
import { CommissionInterface } from 'src/app/shared/interfaces/commission-interface';
import { Student } from 'src/app/shared/interfaces/student-interface';

import { CoursesService } from 'src/app/core/services/courses.service';
import { StudentService } from 'src/app/core/services/student.service';
import { CommissionsService } from 'src/app/core/services/commissions.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})

export class DashboardPageComponent {

  public courses: CourseInterface[];
  public commissions: CommissionInterface[];
  public students: Student[];

  constructor(private studentService: StudentService, private coursesService: CoursesService, private commissionService: CommissionsService) { 
    this.courses = this.coursesService.courses;
    this.students = this.studentService.students;
    this.commissions = this.commissionService.commissions;
  }

  

}