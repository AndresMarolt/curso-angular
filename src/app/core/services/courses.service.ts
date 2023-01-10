import { Injectable } from '@angular/core';
import { CourseInterface } from '../../interfaces/course-interface';
import { BehaviorSubject, Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  // MOCK
  public courses: CourseInterface[] = JSON.parse(localStorage.getItem('courses') || `[
    {id: 1, name: 'Node.js', description: 'Ut sem mauris, pellentesque ut maximus ac, commodo vel tortor. Suspendisse sed tortor ac mi cursus consectetur non non ex. Ut congue nibh a est iaculis rhoncus. Nunc aliquet mi sem, ac pellentesque est accumsan a. Nullam vehicula accumsan dui ut molestie.', students: 102, totalHours: 50},
    {id: 2, name: 'Java', description: 'Ut sem mauris, pellentesque ut maximus ac, commodo vel tortor. Suspendisse sed tortor ac mi cursus consectetur non non ex. Ut congue nibh a est iaculis rhoncus. Nunc aliquet mi sem, ac pellentesque est accumsan a. Nullam vehicula accumsan dui ut molestie.', students: 102, totalHours: 50},
    {id: 3, name: 'PHP', description: 'Ut sem mauris, pellentesque ut maximus ac, commodo vel tortor. Suspendisse sed tortor ac mi cursus consectetur non non ex. Ut congue nibh a est iaculis rhoncus. Nunc aliquet mi sem, ac pellentesque est accumsan a. Nullam vehicula accumsan dui ut molestie.', students: 71, totalHours: 50},
    {id: 4, name: 'Flask', description: 'Ut sem mauris, pellentesque ut maximus ac, commodo vel tortor. Suspendisse sed tortor ac mi cursus consectetur non non ex. Ut congue nibh a est iaculis rhoncus. Nunc aliquet mi sem, ac pellentesque est accumsan a. Nullam vehicula accumsan dui ut molestie.', students: 71, totalHours: 40},
    {id: 5, name: 'React.js', description: 'Ut sem mauris, pellentesque ut maximus ac, commodo vel tortor. Suspendisse sed tortor ac mi cursus consectetur non non ex. Ut congue nibh a est iaculis rhoncus. Nunc aliquet mi sem, ac pellentesque est accumsan a. Nullam vehicula accumsan dui ut molestie.', students: 71, totalHours: 40},
    {id: 6, name: 'Angular', description: 'Ut sem mauris, pellentesque ut maximus ac, commodo vel tortor. Suspendisse sed tortor ac mi cursus consectetur non non ex. Ut congue nibh a est iaculis rhoncus. Nunc aliquet mi sem, ac pellentesque est accumsan a. Nullam vehicula accumsan dui ut molestie.', students: 71, totalHours: 50},
    {id: 7, name: 'Vue.js', description: 'Ut sem mauris, pellentesque ut maximus ac, commodo vel tortor. Suspendisse sed tortor ac mi cursus consectetur non non ex. Ut congue nibh a est iaculis rhoncus. Nunc aliquet mi sem, ac pellentesque est accumsan a. Nullam vehicula accumsan dui ut molestie.', students: 71, totalHours: 40},
  ]`)


  public element: CourseInterface;

  private courseSubject: BehaviorSubject<CourseInterface[]> = new BehaviorSubject(this.courses);
  public courses$: Observable<CourseInterface[]> = this.courseSubject.asObservable();

  private modeSubject: BehaviorSubject<string> = new BehaviorSubject('Crear');
  public mode$: Observable<string> = this.modeSubject.asObservable();

  constructor() { }

  createCourse(course: CourseInterface): void {
    let newId = this.courses.length + 1;
    this.courses = [...this.courses, {id: newId, name: course.name, description: course.description, students: course.students, totalHours: course.totalHours, image: course.image}];
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
