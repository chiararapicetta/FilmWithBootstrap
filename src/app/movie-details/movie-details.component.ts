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

  loading: boolean;
  movies: Movie[];
  index: number;
  //id : number;
  movie: Movie;

  constructor(private logService: LogService,
    private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.loading = false;
    this.logService.getMovies().subscribe(
      data => {
        this.movies = data.results;

        this.index = this.route.snapshot.params['id'];
        this.movie = this.movies[this.index];
        this.route.params.subscribe(
          (params: Params) => {
            this.index = params['id'];
            this.movie = this.movies[this.index];
            this.loading = true;
          }
        );

      }
    );

  }



}
