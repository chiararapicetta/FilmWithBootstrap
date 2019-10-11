import { Component, OnInit } from '@angular/core';
import { LogService } from '../services/log.service';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie : Movie = null;

  constructor(private logservice : LogService) {
    this.logservice.passMovieToDetails.subscribe(
      (moviePassed:Movie) => {
        this.movie = moviePassed;
      }
    );
   }

  ngOnInit() {
  }


}
