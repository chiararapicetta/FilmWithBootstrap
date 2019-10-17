import { Injectable, EventEmitter } from '@angular/core';
import { MOVIES } from '../movie-list';
import { Movie } from '../models/movie.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  movies : Movie[] = [];

  //passMovieToDetails = new EventEmitter<Movie>();
  passMovieToDetails = new Subject<Movie>();

  constructor() {
    MOVIES.forEach(movie => {
      this.movies.push(movie);
    });
   }

   getMovies() {
     return this.movies;
   }

   getMovie(id : number) {
    return this.movies[id];
   }
}
