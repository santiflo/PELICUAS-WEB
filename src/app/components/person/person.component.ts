import { Component, OnInit } from '@angular/core';
import { TMDBApiService } from 'src/app/services/tmdb-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  public movieCredits: Object[];
  public person: Object[];
  public imgURL = 'https://image.tmdb.org/t/p/w500/';

  private personId: null;

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
      this.personId = params.id;
    });

    this._tmdbApiService
    .getDetailPeople(this.personId)
    .then( person => this.person = person)
    .catch( error => this.router.navigate(['/error']));

    this._tmdbApiService
    .getPersonMovieCredits(this.personId)
    .then( movieCredits => this.movieCredits = movieCredits)
    .catch( error => console.error(error));

    setTimeout(() => {
      console.log('detail', this.person)
      console.log('movie credits', this.movieCredits)
    }, 2000);
  }

  goMovie( id:string){
    console.log(id);
    this.router.navigate(['movie',id]);
    this.initialData;
  }

}
