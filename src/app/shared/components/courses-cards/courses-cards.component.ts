import { Component, OnDestroy } from '@angular/core';
import { CourseInterface } from '../../interfaces/course-interface';
import { CoursesService } from 'src/app/core/services/courses.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-courses-cards',
  templateUrl: './courses-cards.component.html',
  styleUrls: ['./courses-cards.component.scss']
})
export class CoursesCardsComponent implements OnDestroy {

  public courses: CourseInterface[];
  private coursesSubscription: Subscription

  constructor(private courseService: CoursesService) { 
    this.coursesSubscription = this.courseService.courses$.subscribe(courses => {
      this.courses = courses
    })
  }

  ngOnDestroy(): void {
    this.coursesSubscription.unsubscribe();
  }
}
