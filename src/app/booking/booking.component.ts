import { Component, OnInit } from '@angular/core';
import { LogService } from '../services/log.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  loading : boolean;
  movies: Movie[];
  title : string;

  constructor(private logService: LogService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.loading = false;
    
    const id = this.route.snapshot.params['id'];

    this.logService.getMovieVideo(id).subscribe(
      data => {
        this.movies = data.results;
        
      }, 
      error => {
        console.log(error);
      }
    );

    this.logService.getMovie(id).subscribe(
      data => {
        this.title = data.original_title;
      },
      error => {
        console.log(error);
      }
    );

  }
}
