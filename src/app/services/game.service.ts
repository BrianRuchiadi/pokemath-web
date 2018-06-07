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
export class GameService {

  constructor(
    private http: HttpClient
  ) { }

  public getStagePokemons(stageId): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(API_URL + '/stage/' + stageId + '/pokemons')
      .pipe(
        tap(stagePokemon => console.log('getStagePokemon api called'))
      );
  }

  public getStageConcise(): Observable<StageConcise[]> {
    return this.http.get<StageConcise[]>(API_URL + '/stages/concise')
      .pipe(
        tap(stageConcise => console.log('getStageConcise api called'))
      );
  }

  public updateGameLog(userId, pokemonId): Observable<UserGameComponent> {
    return this.http.post<UserGameComponent>(API_URL + '/battle/' + userId + '/' + pokemonId + '/win', {
      userId: userId,
      pokemonId: pokemonId
    })
      .pipe(
        tap(gameLog => console.log('updateGameLog api called'))
      );
  }
}
