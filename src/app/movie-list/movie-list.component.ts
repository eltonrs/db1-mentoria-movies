import { Component, OnInit } from '@angular/core';
import { Films, Film } from '../models/films.model';
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
      .subscribe(response => {
        this.films = response.results.map(item => {
          let film = new Film()
          film.title = item.title;
          film.release_date = item.release_date;

          return film;
        })
      });

    this.films.forEach(function(film) {
      console.log("Title: " + film.title);
      console.log("Release Date: " + film.release_date);
    });
  }
}
