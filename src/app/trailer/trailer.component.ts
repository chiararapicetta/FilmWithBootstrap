import { Component, OnInit } from '@angular/core';
import { LogService } from '../services/log.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.css']
})
export class TrailerComponent implements OnInit {

  loading : boolean;
  movies: [];
  title : string;

  constructor(private logService: LogService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.loading = false;

    const id = this.route.snapshot.params['id'];
    this.logService.getMovieVideo(id).subscribe(
      data => {
        this.movies = data.results;
        this.loading = true;
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
