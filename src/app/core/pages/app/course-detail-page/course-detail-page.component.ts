import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseInterface } from 'src/app/shared/interfaces/course-interface';
import { CoursesService } from 'src/app/core/services/courses.service';

@Component({
  selector: 'app-course-detail-page',
  templateUrl: './course-detail-page.component.html',
  styleUrls: ['./course-detail-page.component.scss']
})
export class CourseDetailPageComponent {

  public courseRouteData: any;
  public course: CourseInterface;

  constructor(public router: ActivatedRoute, private courseService: CoursesService) { 
    this.router.params.subscribe(element => {
      this.courseRouteData = element
      console.log(this.courseRouteData);
      this.course = this.courseService.getCourseData(this.courseRouteData.course);
    });
  }
}
