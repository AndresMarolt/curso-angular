import { Injectable } from '@angular/core';
import { CourseInterface } from '../interfaces/course-interface';
import { BehaviorSubject, Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  public courses: CourseInterface[] = JSON.parse(localStorage.getItem('courses') || '[]');
  public element: CourseInterface;

  private courseSubject: BehaviorSubject<CourseInterface[]> = new BehaviorSubject(JSON.parse(localStorage.getItem('courses') || '[]'));
  public courses$: Observable<CourseInterface[]> = this.courseSubject.asObservable();

  private modeSubject: BehaviorSubject<string> = new BehaviorSubject('Crear');
  public mode$: Observable<string> = this.modeSubject.asObservable();

  constructor() { }

  createCourse(course: CourseInterface): void {
    let newId = this.courses.length + 1;
    this.courses = [...this.courses, {id: newId, name: course.name, description: course.description, students: course.students, totalHours: course.totalHours}];
    localStorage.setItem('courses', JSON.stringify(this.courses));

    this.courseSubject.next(this.courses);
  }

  updateCourse(course: CourseInterface): void {
    this.courses = this.courses.map(crs => this.element.id === crs.id ? { ...crs, ...course } : crs );
    localStorage.setItem('courses', JSON.stringify(this.courses));

    this.courseSubject.next(this.courses);
  }

  deleteCourse(course: CourseInterface): void {
    this.courses = this.courses.filter(crs => course.id !== crs.id);
    localStorage.setItem('courses', JSON.stringify(this.courses));

    this.courseSubject.next(this.courses)
  }

  setModeObservable(mode: string): void {
    this.modeSubject.next(mode);
  }

  setElement(element: CourseInterface): void {
    this.element = element;
  }

}
