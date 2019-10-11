import { Injectable, EventEmitter } from '@angular/core';
import { MOVIES } from '../movie-list';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  movies : Movie[] = [];

  passMovieToDetails = new EventEmitter<Movie>();

  constructor() {
    MOVIES.forEach(movie => {
      this.movies.push(movie);
    });
   }

   getMovies() {
     return this.movies;
   }
}
