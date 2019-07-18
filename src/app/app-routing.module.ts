import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { PeopleComponent } from './components/people/people.component';
import { AboutComponent } from './components/about/about.component';
import { PersonComponent } from './components/person/person.component';
import { HomeComponent } from './components/home/home.component';



const routes: Routes = [
  { path: '', component:HomeComponent},
  { path:'movies', component: MoviesComponent },
  { path:'people', component: PeopleComponent },
  { path:'about', component: AboutComponent },
  { path:'movie/:id', component: MovieComponent },
  { path:'person/:id', component: PersonComponent},
  { path:'error', component: ErrorPageComponent },
  { path:'**', component: ErrorPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
