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

  constructor(private http: HttpClient) { }

  passDetails = new Subject<Movie>();

  passGenre = new EventEmitter<number>();
  passSearched = new EventEmitter<string>();

  getMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/popular?api_key=${this.apiKey}&language=${this.language}&page=${1}`);
  }

  getMovieVideo(id): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}&language=${this.language}`);
  }

  getMovie(id) : Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}&language=${this.language}`);
  }

  getGenres() : Observable<any> {
    return this.http.get(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}&language=${this.language}`);
  }



  



}
