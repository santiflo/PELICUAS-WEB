import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TMDBApiService } from '../../services/tmdb-api.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  public cast: Object[];
  public movie: Object[];
  public similarMovies: Object[];
  public imgURL = 'https://image.tmdb.org/t/p/w500/';
  
  private movieId = null;
  

  constructor(
    private activatedRoute: ActivatedRoute,
    private _tmdbApiService: TMDBApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initialData();
  }

  initialData() {
    this.activatedRoute.params.subscribe( params =>{
      this.movieId = params.id;
    });

    this._tmdbApiService
      .getMovieDetails(this.movieId)
      .then( movie => this.movie = movie )
      .catch( error => this.router.navigate(['/error']));
    
    this._tmdbApiService
      .getMovieCredits(this.movieId)
      .then( credits => this.cast = credits.cast)
      .catch( error => console.error(error));
      
    this._tmdbApiService
      .getMovieSimilar(this.movieId)
      .then( similar => this.similarMovies = similar.results)
      .catch( error => console.error(error));
      
    setTimeout(() => {
      console.log('movie', this.movie)
      console.log('cast', this.cast)
      console.log('similarMovies', this.similarMovies)
    }, 5000);
  }

  goMovie(id: string) {
    console.log(id);
    this.router.navigate(['/movie', id]);
    this.initialData();
  }

  
  
}
