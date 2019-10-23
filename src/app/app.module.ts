import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FilmHighlitedDirective } from './directives/film-highlited.directive';
import { RoutingModule } from './routing.module';
import { TrailerComponent } from './trailer/trailer.component';





@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MovieDetailsComponent,
    PageNotFoundComponent,
    FilmHighlitedDirective,
    TrailerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    HttpClientModule,
    NgxYoutubePlayerModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);