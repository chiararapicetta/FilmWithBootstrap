import { Component } from '@angular/core';
import { LogService } from './services/log.service';
import { MovieResolver } from './services/movie-resolver.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LogService, MovieResolver]
})
export class AppComponent {
  title = 'movieWithBootstrap';
}
