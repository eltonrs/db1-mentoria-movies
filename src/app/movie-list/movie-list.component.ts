import { Component, OnInit } from '@angular/core';
import { Film } from '../models/films.model';
import { MoviesService } from '../movies-services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  films: Film[] = [];

  constructor(private moviesSercive: MoviesService) { }

  ngOnInit() {
    this.callService();
  }

  callService() {
    this.moviesSercive
      .getAllMovies()
      .subscribe(filmes => this.films = filmes)

    console.log(this.films);
  };
}
