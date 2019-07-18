import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';

// Services
import { TMDBApiService } from './services/tmdb-api.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './components/movie/movie.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { PeopleComponent } from './components/people/people.component';
import { AboutComponent } from './components/about/about.component';
import { PersonComponent } from './components/person/person.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    ErrorPageComponent,
    MenuComponent,
    PeopleComponent,
    AboutComponent,
    PersonComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, TMDBApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
