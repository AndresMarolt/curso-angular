import { Component, OnDestroy } from '@angular/core';
import { CourseInterface } from 'src/app/interfaces/course-interface';
import { CoursesService } from 'src/app/core/services/courses.service';

@Component({
  selector: 'app-courses-cards',
  templateUrl: './courses-cards.component.html',
  styleUrls: ['./courses-cards.component.scss']
})
export class CoursesCardsComponent implements OnDestroy {

  public courses: CourseInterface[];

  constructor(public courseService: CoursesService) { 
    this.courses = this.courseService.courses;
  }

  ngOnDestroy(): void {
    
  }
}
