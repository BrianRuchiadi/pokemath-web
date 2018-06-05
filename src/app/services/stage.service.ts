import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Pokemon } from './../classes/pokemon';


const API_URL = environment.apiUrl;

@Injectable()
export class StageService {

  constructor(
    private http: HttpClient
  ) { }

  public getStagePokemons(stageId): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(API_URL + '/stage/' + stageId + '/pokemons')
      .pipe(
        tap(stagePokemon => console.log('getStagePokemon api called'))
      );
  }

}
