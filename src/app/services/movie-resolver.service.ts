import { Injectable, ResolvedReflectiveFactory } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Movie } from '../models/movie.model';
import { Observable } from 'rxjs';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class MovieResolver implements Resolve<Movie> {

  constructor(private logService : LogService) { }

  resolve(route : ActivatedRouteSnapshot,
          state : RouterStateSnapshot) : Observable<Movie> | Promise<Movie> | Movie {
            //return this.logService.getMovie(route.params['id']);
            return this.logService.getMovie(+route.paramMap.get('id')); 
          }
}
