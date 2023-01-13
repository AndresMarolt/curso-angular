import { Component } from '@angular/core';
import { Subscription } from 'rxjs'
import { CommissionInterface } from '../../interfaces/commission-interface';
import { CourseInterface } from '../../interfaces/course-interface';
import { CoursesService } from 'src/app/core/services/courses.service';

@Component({
  selector: 'app-commission-list',
  templateUrl: './commission-list.component.html',
  styleUrls: ['./commission-list.component.scss']
})

export class CommissionListComponent {
  displayedColumns: string[] = ['ID', 'Profesor/a', 'Ids de Alumnos', 'Id de Curso', 'Editar', 'Eliminar'];

  modeSubscription: Subscription;
  coursesSubscription: Subscription;

  public courses: CourseInterface[];
  public commissions: CommissionInterface[];
  public mode: string;

  constructor(public courseService: CoursesService) { 
    let comm;

    this.coursesSubscription = this.courseService.courses$.subscribe(courses => {
      comm = courses.map(crs => crs.commissions )
      this.commissions = comm.flat();
      console.log("CAMBIO");
      
    })

    this.modeSubscription = this.courseService.mode$.subscribe(mode => {
      this.mode = mode;
    })
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {

    this.modeSubscription.unsubscribe();
  }

  delete(element: CommissionInterface): void {

    this.courseService.deleteCommission(element)
  }

  setMode(mode: string, element: CommissionInterface) {
    this.courseService.setElement(element);
    this.courseService.setModeObservable(mode);
  }
}
