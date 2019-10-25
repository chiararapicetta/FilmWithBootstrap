import { Component, OnInit } from '@angular/core';
import { LogService } from '../services/log.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  movies: [];
  moviesSearched: [] = null;
  genreSelected: number = null;
  genres: [];

  movieSearched: string = '';
  selected = null;


  constructor(private logService: LogService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.logService.getMovies().subscribe(
      data => {
        this.movies = data.results;      }
    );

    this.logService.getGenres().subscribe(
      data => {
        this.genres = data.genres;
      }
    );

    this.logService.passGenre.subscribe(
      (data: number) => {
        this.genreSelected = data;
      }
    );

    this.logService.passSearched.subscribe(
      (data: string) => {
        this.movieSearched = data;
        if (this.movieSearched) {
          this.logService.getSearchedMovies(this.movieSearched).subscribe(
            title => {
              this.moviesSearched = title.results;
            }
          );
        }
      }
    );

  }


}
