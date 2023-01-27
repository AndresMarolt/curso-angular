import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mergeMap, Observable, tap, pipe, map } from 'rxjs';
import { AdminInterface, SingleUserResponse, LoginSuccessful } from 'src/app/shared/interfaces/admin-interface';


@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  apiUrl = 'https://reqres.in/api'

  constructor(
    private httpClient: HttpClient,
    // private sessionService: SessionService
  ) { }

}
