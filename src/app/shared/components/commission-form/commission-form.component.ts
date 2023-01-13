import { Component } from '@angular/core';
import { CommissionInterface } from '../../interfaces/commission-interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs'
import { CoursesService } from 'src/app/core/services/courses.service';
import { CourseInterface } from '../../interfaces/course-interface';

@Component({
  selector: 'app-commission-form',
  templateUrl: './commission-form.component.html',
  styleUrls: ['./commission-form.component.scss']
})

export class CommissionFormComponent {
  public form: FormGroup;

  public modeSubscription: Subscription;
  
  public mode: string;
  public courses: CourseInterface[];

  constructor(
    private fb: FormBuilder,
    public coursesService: CoursesService
  ) {
    this.form = this.fb.group({
      id: ['', [Validators.required]],
      studentsIds: ['', [Validators.required]],
      teacher: ['', [Validators.required]],
      courseId: ['', [Validators.required]]

    })

    this.courses = this.coursesService.courses;

    this.modeSubscription = this.coursesService.mode$.subscribe(mode => {
      this.mode = mode;
      this.mode === 'Crear' ? this.form.reset() : this.form.patchValue(this.coursesService.element)
    })
  }

  ngOnDestroy(): void {
    this.modeSubscription.unsubscribe()
  }

  submit(commission: CommissionInterface): void {
    this.mode === 'Crear' ? this.coursesService.addCommission(commission) : this.coursesService.updateCommission(commission);
    
    this.form.reset();
  }

  setMode(mode: string): void {
    this.coursesService.setModeObservable(mode);
  }
}