import { Component } from '@angular/core';
import { CommissionInterface } from '../../interfaces/commission-interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs'
import { CommissionsService } from 'src/app/core/services/commissions.service';
import { CoursesService } from 'src/app/core/services/courses.service';
import { CourseInterface } from '../../interfaces/course-interface';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-commission-form',
  templateUrl: './commission-form.component.html',
  styleUrls: ['./commission-form.component.scss']
})

export class CommissionFormComponent {
  public form: FormGroup;

  public modeSubscription: Subscription;
  
  public mode: string;
  public commissions: CommissionInterface[];
  public courses: CourseInterface[];

  constructor(
    private fb: FormBuilder,
    private commissionsService: CommissionsService,
    private coursesService: CoursesService
  ) {
    this.form = this.fb.group({
      id: ['', [Validators.required]],
      teacher: ['', [Validators.required]],
      courseId: ['', [Validators.required]]
    })

    this.commissions = this.commissionsService.commissions;

    this.modeSubscription = this.commissionsService.mode$.subscribe(mode => {
      this.mode = mode;
      this.mode === 'Crear' ? this.form.reset() : this.form.patchValue(this.commissionsService.element);
    })

    this.courses = this.coursesService.courses;
  }

  ngOnDestroy(): void {
    this.modeSubscription.unsubscribe()
  }

  submit(commission: CommissionInterface): void {
    this.mode === 'Crear' ? this.commissionsService.createCommission(commission) : this.commissionsService.updateCommission(commission);
    this.mode === 'Crear' && this.coursesService.addCourseCommission(commission.courseId, commission.id);
    
    this.form.reset();
  }

  setMode(mode: string): void {
    this.commissionsService.setModeObservable(mode);
  }
}