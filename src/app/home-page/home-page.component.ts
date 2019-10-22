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
  genreSelected: string = '';

  movieSearched: string = '';
  selected: Movie = null;

  constructor(private logService: LogService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    //this.movies = this.logService.getMovies(); 

    this.logService.getMovies().subscribe(
      data => {
        this.movies = data.results;
        console.log(this.movies);
      }
    );

    /*for (let movie in this.movies) {
      this.logService.getMovieImage(movie.id).subscribe(

      );
    }*/
  }






}
