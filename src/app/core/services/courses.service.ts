import { Injectable } from '@angular/core';
import { CourseInterface } from 'src/app/shared/interfaces/course-interface';
import { BehaviorSubject, Observable, Subject } from 'rxjs'
import { CommissionInterface } from 'src/app/shared/interfaces/commission-interface';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  // MOCK
  public courses: CourseInterface[] = [
    {id: 1, name: 'Node.js', description: 'Ut sem mauris, pellentesque ut maximus ac, commodo vel tortor. Suspendisse sed tortor ac mi cursus consectetur non non ex. Ut congue nibh a est iaculis rhoncus. Nunc aliquet mi sem, ac pellentesque est accumsan a. Nullam vehicula accumsan dui ut molestie.', students: 102, totalHours: 50, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png', commissionsIds: [1] },
    {id: 2, name: 'Java', description: 'Ut sem mauris, pellentesque ut maximus ac, commodo vel tortor. Suspendisse sed tortor ac mi cursus consectetur non non ex. Ut congue nibh a est iaculis rhoncus. Nunc aliquet mi sem, ac pellentesque est accumsan a. Nullam vehicula accumsan dui ut molestie.', students: 102, totalHours: 50, image: 'https://1000marcas.net/wp-content/uploads/2020/11/Java-logo.png', commissionsIds: [2] },
    {id: 3, name: 'PHP', description: 'Ut sem mauris, pellentesque ut maximus ac, commodo vel tortor. Suspendisse sed tortor ac mi cursus consectetur non non ex. Ut congue nibh a est iaculis rhoncus. Nunc aliquet mi sem, ac pellentesque est accumsan a. Nullam vehicula accumsan dui ut molestie.', students: 71, totalHours: 50, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png',   commissionsIds: [3]},
    {id: 4, name: 'Django', description: 'Ut sem mauris, pellentesque ut maximus ac, commodo vel tortor. Suspendisse sed tortor ac mi cursus consectetur non non ex. Ut congue nibh a est iaculis rhoncus. Nunc aliquet mi sem, ac pellentesque est accumsan a. Nullam vehicula accumsan dui ut molestie.', students: 71, totalHours: 40, image: 'https://framagit.org/uploads/-/system/project/avatar/28062/django.png', commissionsIds: [4] },
    {id: 5, name: 'React.js', description: 'Ut sem mauris, pellentesque ut maximus ac, commodo vel tortor. Suspendisse sed tortor ac mi cursus consectetur non non ex. Ut congue nibh a est iaculis rhoncus. Nunc aliquet mi sem, ac pellentesque est accumsan a. Nullam vehicula accumsan dui ut molestie.', students: 71, totalHours: 40, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png', commissionsIds: [5] },
    {id: 6, name: 'Angular', description: 'Ut sem mauris, pellentesque ut maximus ac, commodo vel tortor. Suspendisse sed tortor ac mi cursus consectetur non non ex. Ut congue nibh a est iaculis rhoncus. Nunc aliquet mi sem, ac pellentesque est accumsan a. Nullam vehicula accumsan dui ut molestie.', students: 71, totalHours: 50, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png', commissionsIds: [6] },
    {id: 7, name: 'Vue.js', description: 'Ut sem mauris, pellentesque ut maximus ac, commodo vel tortor. Suspendisse sed tortor ac mi cursus consectetur non non ex. Ut congue nibh a est iaculis rhoncus. Nunc aliquet mi sem, ac pellentesque est accumsan a. Nullam vehicula accumsan dui ut molestie.', students: 71, totalHours: 40, image: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1655012205990/SlGwV1aND.png', commissionsIds: [7] }
  ]

  constructor() { 
  }

  public element: CourseInterface;


  private courseSubject: BehaviorSubject<CourseInterface[]> = new BehaviorSubject(this.courses);
  public courses$: Observable<CourseInterface[]> = this.courseSubject.asObservable();

  private modeSubject: BehaviorSubject<string> = new BehaviorSubject('Crear');
  public mode$: Observable<string> = this.modeSubject.asObservable();


  createCourse(course: CourseInterface): void {
    let newId = this.courses.length + 1;
    this.courses = [...this.courses, {id: newId, name: course.name, description: course.description, students: course.students, totalHours: course.totalHours, image: course.image, commissionsIds: []}];
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

  setElement(element: any): void {
    this.element = element;
  }

}
