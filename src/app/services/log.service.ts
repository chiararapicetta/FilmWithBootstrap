import { Injectable, EventEmitter } from '@angular/core';
import { MOVIES } from '../movie-list';
import { Movie } from '../models/movie.model';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  movies : Movie[] = [];

  passMovieToDetails = new Subject<Movie>();

  constructor(private http : HttpClient) {

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

   getMovieVideo() : Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/movie/16/videos?api_key=c4d79d0d1e50bf8bc86b7afbd240e4df&language=en-US');
   }

}
