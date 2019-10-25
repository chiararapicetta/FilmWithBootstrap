import { Component, OnInit } from '@angular/core';
import { LogService } from '../services/log.service';
import { ActivatedRoute, Data, Params } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  providers: [LogService]
})
export class MovieDetailsComponent implements OnInit {

  loading: boolean;
  id: number;
  movie;

  constructor(private logService: LogService,
    private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.loading = false;

    this.id = this.route.snapshot.params['id'];
        this.logService.getMovie(this.id).subscribe(
          data => {
            this.movie = data;
            this.loading = true;
          }
        ), 
        error => {
          console.log(error);
        };
  }

}
