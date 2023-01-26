import { Component, OnDestroy } from '@angular/core';
import { CourseInterface } from 'src/app/shared/interfaces/course-interface';
import { Student } from 'src/app/shared/interfaces/student-interface';

import { CoursesService } from 'src/app/core/services/courses.service';
import { StudentService } from 'src/app/core/services/student.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})

export class DashboardPageComponent implements OnDestroy {

  public courses: CourseInterface[];
  public students: Student[];

  private coursesSubscription: Subscription;
  private studentsSubscription: Subscription;

  constructor(private studentService: StudentService, private coursesService: CoursesService) { 
    this.coursesSubscription = this.coursesService.courses$.subscribe(courses => this.courses = courses)
    this.studentsSubscription = this.studentService.students$.subscribe(students => this.students = students);
  }

  ngOnDestroy(): void {
    this.coursesSubscription.unsubscribe();
    this.studentsSubscription.unsubscribe();
  }

}