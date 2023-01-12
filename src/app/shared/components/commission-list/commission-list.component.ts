import { Component } from '@angular/core';
import { Subscription } from 'rxjs'
import { CommissionInterface } from '../../interfaces/commission-interface';
import { CommissionService } from 'src/app/core/services/commission.service';

@Component({
  selector: 'app-commission-list',
  templateUrl: './commission-list.component.html',
  styleUrls: ['./commission-list.component.scss']
})

export class CommissionListComponent {
  displayedColumns: string[] = ['ID', 'Ids de Alumnos', 'Id de Curso'];

  coursesSubscription: Subscription;
  modeSubscription: Subscription;

  public courses: CommissionInterface[];
  public mode: string;

  constructor(public commissionService: CommissionService) {
    this.coursesSubscription = this.commissionService.commissions$.subscribe(courses => {
      this.courses = courses;
      courses.forEach(e => console.log(e))
      
    })

    console.log(this.courses);
    
    this.modeSubscription = this.commissionService.mode$.subscribe(mode => {
      this.mode = mode;
    })
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    this.coursesSubscription.unsubscribe();
    this.modeSubscription.unsubscribe();
  }

  delete(course: CommissionInterface): void {
    this.commissionService.deleteCommission(course);
  }

  setMode(mode: string, element: CommissionInterface) {
    this.commissionService.setElement(element);
    this.commissionService.setModeObservable(mode);
  }
}
