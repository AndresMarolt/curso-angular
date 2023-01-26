import { Component, OnDestroy } from '@angular/core';
import { CourseInterface } from 'src/app/shared/interfaces/course-interface';
import { CoursesService } from 'src/app/core/services/courses.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnDestroy {
  public sidenavCourses: CourseInterface[];
  public coursesSubscription: Subscription;

  constructor(public courseService: CoursesService) { 
    this.sidenavCourses = this.courseService.getCourses();

    this.coursesSubscription = this.courseService.courses$.subscribe(courses => {
      this.sidenavCourses = courses;
    })
  }

  ngOnDestroy(): void {
    this.coursesSubscription.unsubscribe();
  }

  
}
