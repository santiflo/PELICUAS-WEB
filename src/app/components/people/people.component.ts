import { Component, OnInit } from '@angular/core';
import { TMDBApiService } from 'src/app/services/tmdb-api.service';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
  providers: [TMDBApiService]
})
export class PeopleComponent implements OnInit {

  public people = [];
  public imgURL = 'https://image.tmdb.org/t/p/w500/';

  constructor(
    private _tmdbApiService: TMDBApiService
  ) { }

  ngOnInit() {
    this._tmdbApiService.getPeoplePopular().then(data => this.people = data.results)
    console.log('this.people', this.people);
    setTimeout(() => {
      console.log('this people', this.people);
    }, 5000);
  }

}
