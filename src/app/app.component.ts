import { Component } from '@angular/core';
import { LogService } from './services/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LogService]
})
export class AppComponent {
  title = 'movieWithBootstrap';
  genreSelected: number = null;
  movieSearched : string = '';

  constructor(private logService: LogService) { }

  passGenreSelected() {
    this.logService.passGenre.emit(this.genreSelected);
  }

  passMovieSearched() {
    this.logService.passSearched.emit(this.movieSearched);
  }

  

}
