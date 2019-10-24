import { Component } from '@angular/core';
import { LogService } from './services/log.service';
import { AuthService } from './services/auth.service';

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

  constructor(private logService: LogService,
              private authService : AuthService) { }

  passGenreSelected() {
    this.logService.passGenre.emit(this.genreSelected);
    this.logService.passSearched.emit(this.movieSearched);
  }

  passMovieSearched() {
    this.logService.passSearched.emit(this.movieSearched);
    this.movieSearched='';
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  

}
