import { Component, OnInit } from '@angular/core';
import { LogService } from '../services/log.service';
import { Movie } from '../models/movie.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  movies : Movie[];
  genreSelected : string = '';

  movieSearched : string = '';

  constructor(private logService : LogService,
              private router : Router,
              private route : ActivatedRoute) { 
  }

  ngOnInit() {
    this.movies = this.logService.getMovies();
  }

  passInfoToDetails(movie:Movie) {
    this.logService.passMovieToDetails.emit(movie);
  }



}
