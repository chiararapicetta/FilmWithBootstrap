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
  movie: Movie;
  id: number;
  key: string;
  loading : boolean = false;

  constructor(private logService: LogService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    //this.movies = this.logService.getMovies();

    this.id = this.route.snapshot.params['id'];
    this.movie = this.logService.getMovie(this.id - 1);
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.movie = this.logService.getMovie(this.id - 1);
      }
    );

    this.logService.getMovieVideo().subscribe(
      data => {
        this.key = data.results[0].key;
        console.log(this.key);
        this.loading = true;
      },
      error => {
        console.log('errore');
      } 
      );

  }
}
