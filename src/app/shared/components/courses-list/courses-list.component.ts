import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CourseInterface } from '../../interfaces/course-interface';
import { CoursesService } from 'src/app/core/services/courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})

export class CoursesListComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['ID', 'Imagen', 'Curso', 'Descripcion', 'Carga Horaria', 'Comisiones', 'Editar', 'Eliminar'];

  coursesSubscription: Subscription;
  modeSubscription: Subscription;

  public courses: CourseInterface[];
  public mode: string;

  constructor(private courseService: CoursesService) {
    this.coursesSubscription = this.courseService.courses$.subscribe(courses => {
      this.courses = courses;
    })

    this.modeSubscription = this.courseService.mode$.subscribe(mode => {
      this.mode = mode;
    })


  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    this.coursesSubscription.unsubscribe();
    this.modeSubscription.unsubscribe();
  }

  delete(course: CourseInterface): void {
    this.courseService.deleteCourse(course);
    // this.commissionService.deleteCourseCommissions(course.commissionsIds);
  }

  setMode(mode: string, element: CourseInterface) {
    this.courseService.setElement(element);
    this.courseService.setModeObservable(mode);
  }
}
