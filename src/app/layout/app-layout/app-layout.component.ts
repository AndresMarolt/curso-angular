import { Component } from '@angular/core';
import { CourseInterface } from 'src/app/interfaces/course-interface';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent {
  public sidenavCourses: CourseInterface[] = JSON.parse(localStorage.getItem('courses') || '[]');

  constructor() { 

   }

  
}
