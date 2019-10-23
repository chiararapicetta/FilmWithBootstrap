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

  movies: Movie[];
  genreSelected: number = null;
  genres : [];

  movieSearched: string = '';
  selected: Movie = null;

  constructor(private logService: LogService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.logService.getMovies().subscribe(
      data => {
        this.movies = data.results;
      }
    );

    this.logService.getGenres().subscribe(
      data => {
        this.genres = data.genres
      }
    );

    this.logService.passGenre.subscribe(
      (data : number) => {
        this.genreSelected = data;
      }
    );
    this.logService.passSearched.subscribe(
      (data : string ) => {
        this.movieSearched = data;
      }
    )
  }

 

}
