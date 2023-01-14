import { Injectable } from '@angular/core';
import { CommissionInterface } from 'src/app/shared/interfaces/commission-interface';
import { BehaviorSubject, Observable } from 'rxjs'
import { Student } from 'src/app/shared/interfaces/student-interface';

@Injectable({
  providedIn: 'root'
})
export class CommissionsService {

  constructor() { }

  // MOCK
  public commissions: CommissionInterface[] = [
    {id: 1, teacher: 'Pedro Gonzalez', courseId: 1, studentsIds: [1, 8]},
    {id: 2, teacher: 'Javier García', courseId: 2, studentsIds: [2, 9]},
    {id: 3, teacher: 'Victoria Quintana', courseId: 3, studentsIds: [3, 10]},
    {id: 4, teacher: 'Héctor Vargas', courseId: 4, studentsIds: [4, 11]},
    {id: 5, teacher: 'Tatiana Benítez', courseId: 5, studentsIds: [5]},
    {id: 6, teacher: 'Francisco Cedrón', courseId: 6, studentsIds: [6]},
    {id: 7, teacher: 'Christian Pérez', courseId: 7, studentsIds: [7]}
  ]

  public element: CommissionInterface;

  private commissionsSubject: BehaviorSubject<CommissionInterface[]> = new BehaviorSubject(this.commissions);
  public commissions$: Observable<CommissionInterface[]> = this.commissionsSubject.asObservable();

  private modeSubject: BehaviorSubject<string> = new BehaviorSubject('Crear');
  public mode$: Observable<string> = this.modeSubject.asObservable();


  createCommission(commission: CommissionInterface): void {
    this.commissions = [...this.commissions, {id: commission.id, studentsIds: [], teacher: commission.teacher, courseId: commission.courseId}];
    localStorage.setItem('commissions', JSON.stringify(this.commissions));

    this.commissionsSubject.next(this.commissions);
  }

  updateCommission(commission: CommissionInterface): void {
    this.commissions = this.commissions.map(cms => this.element.id === cms.id ? { ...cms, ...commission } : cms );
    localStorage.setItem('commissions', JSON.stringify(this.commissions));

    this.commissionsSubject.next(this.commissions);
  }

  deleteCommission(commission: CommissionInterface): void {
    this.commissions = this.commissions.filter(cms => commission.id !== cms.id);
    localStorage.setItem('commissions', JSON.stringify(this.commissions));

    this.commissionsSubject.next(this.commissions)
  }

  addCommissionStudent(commissionId: number, studentId: number): void {
    let comm = this.commissions.find(cms => cms.id === commissionId);
    comm?.studentsIds.push(studentId)
   
    this.commissions = this.commissions.map(cms => cms.id === commissionId ? comm! : cms )
    localStorage.setItem('commissions', JSON.stringify(this.commissions))

    this.commissionsSubject.next(this.commissions)
  }

  deleteCommissionStudent(commissionId: number, studentId: number): void {
    let comm = this.commissions.find(cms => cms.id === commissionId);
    comm!.studentsIds = comm!.studentsIds.filter(id => id !== studentId);
    this.commissions = this.commissions.map(cms => cms.id === commissionId ? comm! : cms)
    localStorage.setItem('commissions', JSON.stringify(this.commissions));

    this.commissionsSubject.next(this.commissions);
  }


  setModeObservable(mode: string): void {
    this.modeSubject.next(mode);
  }

  setElement(element: any): void {
    this.element = element;
  }
}
