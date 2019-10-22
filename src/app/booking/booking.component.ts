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

  movies: Movie[];

  constructor(private logService: LogService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    const id = this.route.snapshot.params['id'];
    console.log(id);

    this.logService.getMovieVideo(id).subscribe(
      data => {
        this.movies = data.results;
        console.log(this.movies);
      }, 
      error => {
        console.log(error);
      }
    );

  }
}
