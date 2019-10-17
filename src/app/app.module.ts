import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FilmHighlitedDirective } from './directives/film-highlited.directive';
import { MovieResolver } from './services/movie-resolver.service';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent, children: [
      { path: 'details/:id', component: MovieDetailsComponent, resolve: {movie : MovieResolver} }
  ]},
  { path: 'page-not-found', component: PageNotFoundComponent},
  { path: '**', redirectTo: '/page-not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MovieDetailsComponent,
    PageNotFoundComponent,
    FilmHighlitedDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'enabled' }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
