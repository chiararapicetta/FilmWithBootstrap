import { Injectable, EventEmitter } from '@angular/core';
import { MOVIES } from '../movie-list';
import { Movie } from '../models/movie.model';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = 'c4d79d0d1e50bf8bc86b7afbd240e4df';
  language: string = 'en-US';

  movies: Movie[] = [];

  passMovieToDetails = new Subject<Movie>();

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    //return this.movies;
    return this.http.get(`${this.baseUrl}/movie/popular?api_key=${this.apiKey}&language=${this.language}&page=${1}`);
  }

  /*getMovie(id : number)  {
   return this.movies[id];
  }*/

  getMovieVideo(id): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}&language=${this.language}`);
  }

  



}
