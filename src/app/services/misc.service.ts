import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Pokemon } from './../classes/pokemon';
import { StageConcise } from './../classes/stage-concise';

import { UserGameComponent } from './../classes/user-game-component';

const API_URL = environment.apiUrl;

@Injectable()
export class MiscService {

  constructor(
    private http: HttpClient
  ) { }

  public getAvatarsCount(): Observable<number> {
    return this.http.get<number>(API_URL + '/avatars/count')
      .pipe(
        tap(stagePokemon => console.log('getAvatarsCount api called'))
      );
  }
}
