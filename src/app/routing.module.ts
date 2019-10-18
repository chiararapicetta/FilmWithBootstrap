import { NgModel } from "@angular/forms";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
    {
      path: '', component: HomePageComponent, children: [
        { path: 'details/:id', component: MovieDetailsComponent }
      ]
    },
    { path: 'page-not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/page-not-found' }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
  })
  export class RoutingModule {
      
  }