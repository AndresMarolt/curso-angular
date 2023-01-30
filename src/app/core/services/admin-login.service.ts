import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { mergeMap, Observable, tap, pipe, map, BehaviorSubject } from 'rxjs';
import { AdminInterface, SingleUserResponse, LoginSuccessful } from 'src/app/shared/interfaces/admin-interface';
import { SessionService } from './session.service';


@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  private isLoggedInSubject: BehaviorSubject<any> = new BehaviorSubject<boolean>(false);
  public isLoggedIn$: Observable<any> = this.isLoggedInSubject.asObservable();

  constructor(
    private sessionService: SessionService
  ) {
    const token = localStorage.getItem('auth')
    this.isLoggedInSubject.next(!!token);
  }

  login(email: string, password: string) {
    return this.sessionService.login( email, password ).pipe(
      tap((response: any) => {
        this.isLoggedInSubject.next(true);
        localStorage.setItem('auth', response.token);
      })
    )
  }

}
