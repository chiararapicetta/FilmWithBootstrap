import { Component, OnInit } from '@angular/core';
import { LogService } from '../services/log.service';
import { Movie } from '../models/movie.model';
import { ActivatedRoute, Data, Params } from '@angular/router';
import { FnParam } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  providers: [LogService]
})
export class MovieDetailsComponent implements OnInit {

  movies : Movie[];
  id : number;
  movie : Movie;

  constructor(private logService : LogService,
              private route : ActivatedRoute) {
    
   }

  ngOnInit() {
    this.movies = this.logService.getMovies();
    
    this.id = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params : Params) => {
        this.id = params['id'];
      }
    )
    this.movie = this.movies[this.id];
    

    /*this.logservice.passMovieToDetails.subscribe(
      (moviePassed:Movie) => {
        this.movie = moviePassed;
      }
    );*/
  }



}
