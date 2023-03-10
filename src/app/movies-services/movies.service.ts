import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Films } from '../models/films.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  readonly apiStarWars: string = 'https://swapi.dev/api';
  films: Films[] = [];

  constructor(private http: HttpClient) { }

  getAllMovies(){
    this.http
      .get<Films>(
        `${this.apiStarWars}/films`,
        {
          observe: 'body',
          responseType: 'json'
        }
      )
      .subscribe(response => {
        response.results.forEach(function(value){
          console.log("Title: " + value.title);
          console.log("Release Date: " + value.release_date);
        });
      });
  }
}

// https://angular.io/guide/http
// https://www.devmedia.com.br/angular-http-como-realizar-requisicoes-em-suas-aplicacoes/40642#:~:text=Para%20usar%20a%20classe%20HttpClient,iniciamos%20um%20novo%20projeto%20Angular.