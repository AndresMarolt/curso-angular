import { Component } from '@angular/core';
import { Subscription } from 'rxjs'
import { CommissionInterface } from '../../interfaces/commission-interface';
import { CoursesService } from 'src/app/core/services/courses.service';
import { CommissionsService } from 'src/app/core/services/commissions.service';

@Component({
  selector: 'app-commission-list',
  templateUrl: './commission-list.component.html',
  styleUrls: ['./commission-list.component.scss']
})

export class CommissionListComponent {
  displayedColumns: string[] = ['ID', 'Profesor/a', 'Ids de Alumnos', 'Id de Curso', 'Editar', 'Eliminar'];

  modeSubscription: Subscription;
  commissionsSubscription: Subscription;

  public commissions: CommissionInterface[];
  public mode: string;

  constructor(public commissionService: CommissionsService, private courseService: CoursesService) { 
    this.commissionsSubscription = this.commissionService.commissions$.subscribe(commissions => {
      this.commissions = commissions;
    })

    this.modeSubscription = this.commissionService.mode$.subscribe(mode => {
      this.mode = mode;
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.commissionsSubscription.unsubscribe();
    this.modeSubscription.unsubscribe();
  }

  delete(commission: CommissionInterface): void {
    this.commissionService.deleteCommission(commission);
    this.courseService.deleteCourseCommission(commission.courseId, commission.id);
  }

  setMode(mode: string, element: CommissionInterface) {
    this.commissionService.setElement(element);
    this.commissionService.setModeObservable(mode);
  }
}
