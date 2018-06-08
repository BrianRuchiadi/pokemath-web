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

  public getUserPokedex(): Observable<UserPokedex[]> {
    return this.http.get<UserPokedex[]>(API_URL + '/user/pokedex')
      .pipe(
        tap(userPokedex => console.log('getUserPokedex api called'))
      );
  }

  public getUserGameComponent(): Observable<UserGameComponent[]> {
    return this.http.get<UserGameComponent[]>(API_URL + '/user/game-component')
      .pipe(
        tap(userGameComponent => console.log('getUserGameComponent api called'))
      );
  }

  public updateAttackPower() {
    return this.http.post(API_URL + '/user/attack/update', {}).subscribe(
      res => {
        console.log(['updateAttackPower response', res]);
      },
      err => {
        console.log(['updateAttackPower error', err]);
      }
    );
  }

}
