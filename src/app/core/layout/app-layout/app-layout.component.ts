import { Component } from '@angular/core';
import { CourseInterface } from 'src/app/shared/interfaces/course-interface';
import { CoursesService } from 'src/app/core/services/courses.service';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent {
  public sidenavCourses: CourseInterface[];

  constructor(public courseService: CoursesService) { 
    this.sidenavCourses = this.courseService.courses;
  }

  
}
