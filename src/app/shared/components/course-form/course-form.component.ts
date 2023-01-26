import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseInterface } from '../../interfaces/course-interface';
import { CoursesService } from 'src/app/core/services/courses.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})

export class CourseFormComponent implements OnDestroy {

  public form: FormGroup;

  public modeSubscription: Subscription;
  
  public mode: string;

  constructor(
    private fb: FormBuilder,
    private courseService: CoursesService
  ) { 
    this.form = this.fb.group({
      id: [''],
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      totalHours: ['', [Validators.required]],
      commissionsIds: [''],
      image: ['', [Validators.required]],
    })

    this.modeSubscription = this.courseService.mode$.subscribe(mode => {
      this.mode = mode;
      this.mode === 'Crear' ? this.form.reset() : this.form.patchValue(this.courseService.element)
    })
  }

  ngOnDestroy(): void {
    this.modeSubscription.unsubscribe()
  }

  submit(course: CourseInterface): void {
    course.commissionsIds = course.commissionsIds.split(',');
    course.commissionsIds = course.commissionsIds.map((value: any) => Number(value));
    
    console.log(course);
    
    if(this.mode === 'Crear') {
      this.courseService.createCourse(course)
    } else {
      this.courseService.updateCourse(course);
    }

    this.form.reset();
  }

  setMode(mode: string): void {
    this.courseService.setModeObservable(mode);
  }
}
