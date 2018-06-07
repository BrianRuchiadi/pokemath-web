import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { UserPokedex } from './../classes/user-pokedex';
import { UserGameComponent } from './../classes/user-game-component';

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

  public getUserGameComponent(userId): Observable<UserGameComponent[]> {
    return this.http.get<UserGameComponent[]>(API_URL + '/user/' + userId + '/game-component')
      .pipe(
        tap(userGameComponent => console.log('getUserGameComponent api called'))
      );
  }

  public updateAttackPower(userLog) {
    return this.http.post(API_URL + '/user/' + userLog.user_id + '/attack/update', {
      userLog: userLog
    }).subscribe(
      res => {
        console.log(['updateAttackPower response', res]);
      },
      err => {
        console.log(['updateAttackPower error', err]);
      }
    );
  }

}
