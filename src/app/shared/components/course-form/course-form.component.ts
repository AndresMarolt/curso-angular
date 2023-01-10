import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseInterface } from 'src/app/interfaces/course-interface';
import { CoursesService } from 'src/app/core/services/courses.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})

export class CourseFormComponent implements OnInit, OnDestroy {

  public form: FormGroup;

  public modeSubscription: Subscription;
  
  public mode: string;

  constructor(
    private fb: FormBuilder,
    private courseService: CoursesService
  ) { 
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      totalHours: ['', [Validators.required]],
      image: ['', [Validators.required]],
    })

    this.modeSubscription = this.courseService.mode$.subscribe(mode => {
      this.mode = mode;
      this.mode === 'Crear' ? this.form.reset() : this.form.patchValue(this.courseService.element)
    })
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    this.modeSubscription.unsubscribe()
  }

  submit(course: CourseInterface): void {
    this.mode === 'Crear' ? this.courseService.createCourse(course) : this.courseService.updateCourse(course);
    this.form.reset();
  }

  setMode(mode: string): void {
    this.courseService.setModeObservable(mode);
  }
}
