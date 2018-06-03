import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment.prod';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


const API_URL = environment.apiUrl;

@Injectable()
export class PlayService {

  constructor(
    private http: HttpClient
  ) { }

}
