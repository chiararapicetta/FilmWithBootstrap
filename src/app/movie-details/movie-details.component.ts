import { Component, OnInit } from '@angular/core';
import { LogService } from '../services/log.service';
import { Movie } from '../models/movie.model';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie : Movie ;

  constructor(private logservice : LogService,
              private route : ActivatedRoute) {
    
   }

  ngOnInit() {
    console.log(this.movie);
    this.route.data.subscribe(
      (data : Data) => {
        this.movie = data['server'];
      }
    )
    console.log(this.movie);
    
    /*this.logservice.passMovieToDetails.subscribe(
      (moviePassed:Movie) => {
        this.movie = moviePassed;
      }
    );*/
  }



}
