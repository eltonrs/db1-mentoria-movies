import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

import { Film, Films } from '../models/films.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  readonly apiStarWars: string = 'https://swapi.dev/api';

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<Film[]> {
    return this.http
      .get<Films>(
        `${this.apiStarWars}/films`,
        {
          observe: 'body',
          responseType: 'json'
        })
        .pipe(map(
          response => {
            let films: Film[];

            films = response.results.map(item => {
              let film: Film = new Film();

              film.title = item.title;
              film.release_date = item.release_date;

              return film;
            });

            return films;
          }
        ));
  }
}

// https://angular.io/guide/http
// https://www.devmedia.com.br/angular-http-como-realizar-requisicoes-em-suas-aplicacoes/40642#:~:text=Para%20usar%20a%20classe%20HttpClient,iniciamos%20um%20novo%20projeto%20Angular.
