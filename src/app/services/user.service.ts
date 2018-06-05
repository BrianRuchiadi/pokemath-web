import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { UserPokedex } from './../classes/user-pokedex';


const API_URL = environment.apiUrl;

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  public getUserPokedex(userId): Observable<UserPokedex[]> {
    return this.http.get<UserPokedex[]>(API_URL + '/user/' + userId + '/pokedex')
      .pipe(
        tap(userPokedex => console.log('getUserPokedex api called'))
      );
  }

}
