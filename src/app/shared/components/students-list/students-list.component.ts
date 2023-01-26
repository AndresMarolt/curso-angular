import { Component, OnInit, Output, Input, EventEmitter, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Student } from '../../interfaces/student-interface';
import { StudentService } from 'src/app/core/services/student.service';
import { CoursesService } from 'src/app/core/services/courses.service';
import { CoursesPageRoutingModule } from 'src/app/core/pages/admin/courses-page/courses-page-routing.module';
import { CourseInterface } from '../../interfaces/course-interface';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})

export class StudentsListComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['ID', 'Alumno', 'Email', 'Editar', 'Eliminar'];

  studentsSubscription: Subscription;
  coursesSubscription: Subscription;
  modeSubscription: Subscription;

  public students: Student[];
  public courses: CourseInterface[];
  public mode: string;

  constructor(private studentService: StudentService, private courseService: CoursesService) { 
    this.studentsSubscription = this.studentService.students$.subscribe(students => {
      this.students = students;
    } );

    this.coursesSubscription = this.courseService.courses$.subscribe(courses => this.courses = courses);

    this.modeSubscription = this.studentService.mode$.subscribe(mode => {
      this.mode = mode
    })
  }

  ngOnInit(): void {
  
  }

  ngOnDestroy(): void {
    this.studentsSubscription.unsubscribe();
    this.coursesSubscription.unsubscribe();
    this.modeSubscription.unsubscribe();
  }

  delete(student: Student): void {
    this.studentService.deleteStudent(student);
    // this.commissionService.deleteCommissionStudent(student.commissionId, student.id);
  }

  setMode(mode: string, element: Student) {
    this.studentService.setElement(element)
    this.studentService.setModeObservable(mode);
  }

}