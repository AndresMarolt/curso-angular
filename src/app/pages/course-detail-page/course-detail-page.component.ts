import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail-page',
  templateUrl: './course-detail-page.component.html',
  styleUrls: ['./course-detail-page.component.scss']
})
export class CourseDetailPageComponent {
  public courseData: any;

  constructor(public router: ActivatedRoute) { 
    this.router.params.subscribe(element => {
      this.courseData = element
    });
  }
}
