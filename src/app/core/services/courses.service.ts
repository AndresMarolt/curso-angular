import { Injectable, OnInit } from '@angular/core';
import { CourseInterface } from 'src/app/shared/interfaces/course-interface';
import { BehaviorSubject, Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  public element: CourseInterface;

  private courseSubject: BehaviorSubject<CourseInterface[]> = new BehaviorSubject<CourseInterface[]>([]);
  public courses$: Observable<CourseInterface[]> = this.courseSubject.asObservable();

  private modeSubject: BehaviorSubject<string> = new BehaviorSubject('Crear');
  public mode$: Observable<string> = this.modeSubject.asObservable();

  constructor(
    private httpClient: HttpClient
  ) {
    this.getCoursesFromAPI().subscribe(courses => {
      this.courseSubject.next(courses);
    })
  }

  getCoursesFromAPI(): Observable<CourseInterface[]> {
    return this.httpClient.get<CourseInterface[]>('https://63cc20169b72d2a88e0893c6.mockapi.io/cursos');
  }

  getCourses(): CourseInterface[] {
    console.log(this.courseSubject.getValue());
    
    return this.courseSubject.getValue()
  }

  getCourseData(courseName: string): any {
    let searchedCourse = this.courseSubject.getValue().find(crs => crs.name === courseName);
    
    return searchedCourse || undefined; 
  }

  createCourse(course: CourseInterface): void {
    let newId = this.courseSubject.getValue().length + 1;

    let newCourse = {...course, id: newId};

    this.httpClient.post('https://63cc20169b72d2a88e0893c6.mockapi.io/cursos', newCourse).subscribe(_ => {
      let newList = this.courseSubject.getValue();
      newList.push(newCourse);
      this.courseSubject.next(newList);
    })
  }

  updateCourse(course: CourseInterface): void {
    
    this.httpClient.put(`https://63cc20169b72d2a88e0893c6.mockapi.io/cursos/${course.id}`, course).subscribe(_ => {
      let newList = this.courseSubject.getValue().map(crs => crs.id === course.id ? course : crs);
      this.courseSubject.next(newList);
    })
  }
  
  deleteCourse(course: CourseInterface): void {
    this.httpClient.delete(`https://63cc20169b72d2a88e0893c6.mockapi.io/cursos/${course.id}`).subscribe(_ => {
      let newList = this.courseSubject.getValue().filter(crs => crs.id !== course.id);
      this.courseSubject.next(newList);
    })
  }

  setModeObservable(mode: string): void {
    this.modeSubject.next(mode);
  }

  setElement(element: any): void {
    this.element = element;
  }

}
