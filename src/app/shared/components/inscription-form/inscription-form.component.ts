import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {Subscription} from 'rxjs'
import { CoursesService } from 'src/app/core/services/courses.service';
import { StudentService } from 'src/app/core/services/student.service';
import { CourseInterface } from '../../interfaces/course-interface';
import { Student } from '../../interfaces/student-interface';

@Component({
  selector: 'app-inscription-form',
  templateUrl: './inscription-form.component.html',
  styleUrls: ['./inscription-form.component.scss']
})
export class InscriptionFormComponent implements OnDestroy, OnInit {
  public courseSubscription: Subscription;
  public studentSubscription: Subscription;
  public modeSubscription: Subscription;
  public formChangesSubscription: Subscription;

  public form: FormGroup;

  public students: Student[];
  public courses: CourseInterface[];
  public mode: string;

  public currentCommissions: number[] = [];

  constructor(private fb: FormBuilder, private studentService: StudentService, private courseService: CoursesService) {
    this.courseSubscription = this.courseService.courses$.subscribe(courses => {
      this.courses = courses;
    })
    
    this.modeSubscription = this.courseService.mode$.subscribe(mode => {
      this.mode = mode;
    })    
    
    this.studentSubscription = this.studentService.students$.subscribe(students => {
      this.students = students;
    })
    
    this.form = this.fb.group({
      student: ['', [Validators.required]],
      course: ['', [Validators.required]],
      commissions: ['', [Validators.required]]
    })
  }
  
  ngOnInit(): void {
    this.mode = 'Crear';
    
    this.onChanges()
  }
  
  trackByIdx(index: number, obj: any): any {
    return index;
  }
  
  onChanges(): void {
    let previousCourse = this.form.value.course;
    
    this.formChangesSubscription = this.form.valueChanges.subscribe(val => {
      console.log(this.students);
      
      if(val.course !== previousCourse) {
        let newCourse = this.courses.find(crs => crs.id === val.course);
        this.currentCommissions = newCourse?.commissionsIds;
        previousCourse = val.course
      }
      
    })
  }

  submit(formValue: any): void {
    
    let searchedStudent = this.students.find(stu => stu.id === formValue.student);
    searchedStudent = {...searchedStudent!, commissionId: formValue.commissions}
    this.studentService.updateStudent(searchedStudent);
    
    this.form.reset()
  }

  setMode(mode: string): void {
    this.courseService.setModeObservable(mode);
  }

  changeCourse(): void {
    let newCourseId = this.form.get("course")!.value;
    let foundCourse = this.courses.find(crs => crs.id === newCourseId);
    this.currentCommissions = foundCourse!.commissionsIds
    
  }

  ngOnDestroy(): void {
    this.courseSubscription.unsubscribe();
    this.studentSubscription.unsubscribe();
    this.modeSubscription.unsubscribe();
    // this.formChangesSubscription.unsubscribe();
  }

}
