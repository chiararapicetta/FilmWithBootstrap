import { Injectable, EventEmitter } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = environment.apiKey;
  language: string = 'en-US';

  movies:[] = [];

  constructor(private http: HttpClient) { }

  passDetails = new Subject<any>();

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

  getSearchedMovies(title) : Observable<any> {
    return this.http.get(`${this.baseUrl}/search/movie?api_key=${this.apiKey}&language=${this.language}&query=${title}&page=1&include_adult=${false}`);
  }
 

}
