import { Injectable } from '@angular/core';
import { CommissionInterface } from 'src/app/shared/interfaces/commission-interface';
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CommissionService {

  public commissions: CommissionInterface[] = [
    {id: 1, studentsIds: [1, 2], courseId: 1},
    {id: 2, studentsIds: [2, 3], courseId: 2},
    {id: 3, studentsIds: [3, 4], courseId: 3},
    {id: 4, studentsIds: [4, 5], courseId: 4},
    {id: 5, studentsIds: [5, 6], courseId: 5},
    {id: 6, studentsIds: [6, 7], courseId: 6},
    {id: 7, studentsIds: [7, 8], courseId: 7},
    {id: 8, studentsIds: [8, 9], courseId: 8},
    {id: 9, studentsIds: [9, 10], courseId: 9},
    {id: 10, studentsIds: [10, 11], courseId: 10},
  ]

  constructor() { }

  public element: CommissionInterface;

  private commissionSubject: BehaviorSubject<CommissionInterface[]> = new BehaviorSubject(this.commissions);
  public commissions$: Observable<CommissionInterface[]> = this.commissionSubject.asObservable();

  private modeSubject: BehaviorSubject<string> = new BehaviorSubject('Crear');
  public mode$: Observable<string> = this.modeSubject.asObservable();

  createCommission(commission: CommissionInterface): void {
    let newId = this.commissions.length + 1;
    this.commissions = [...this.commissions, {id: newId, studentsIds: commission.studentsIds, courseId: commission.courseId}];
    localStorage.setItem('commissions', JSON.stringify(this.commissions));

    this.commissionSubject.next(this.commissions);
  }

  updateCommission(course: CommissionInterface): void {
    this.commissions = this.commissions.map(cms => this.element.id === cms.id ? { ...cms, ...course } : cms );
    localStorage.setItem('commissions', JSON.stringify(this.commissions));

    this.commissionSubject.next(this.commissions);
  }

  deleteCommission(commission: CommissionInterface): void {
    this.commissions = this.commissions.filter(cms => commission.id !== cms.id);
    localStorage.setItem('commissions', JSON.stringify(this.commissions));

    this.commissionSubject.next(this.commissions)
  }

  setModeObservable(mode: string): void {
    this.modeSubject.next(mode);
  }

  setElement(element: CommissionInterface): void {
    this.element = element;
  }
}
