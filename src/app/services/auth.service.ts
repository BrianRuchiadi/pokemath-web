import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const API_URL = environment.apiUrl;

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  public register(username, avatarId) {
    return this.http.post(API_URL + '/register', {
      username: username,
      avatarId: avatarId
    })
      .pipe(
        tap(register => console.log('register api called'))
      );
  }

  public login(username, password): any {
      return this.http.post(API_URL + '/login', {
          username: username,
          password: password
      })
        .pipe(
            tap(login => console.log('login api called'))
        );
  }
}
