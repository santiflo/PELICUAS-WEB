import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TMDBApiService {

  /* Base para consumir los servcios de TMDB */
  private baseURL = 'https://api.themoviedb.org/3';
  /* Llave ligada a la cuenta de santiflo brindada por TMDB*/
  private apiKey = '7eb1359b96bd24ecfce223a9bb3d3c30';
  /* Lenguaje al que se desea obtener las peticiones */
  private language = 'es-US';

  constructor( private _http: HttpClient) { }

  getFromTMDB(search: string): Promise<any> {
    /* url base para consumir los servicios */
    let url = `${this.baseURL}/${search}?api_key=${this.apiKey}&language=${this.language}`;
    console.log('url', url);
    return this._http.get(url).toPromise();
  }

  /* Obtiene un objeto que contiene las peliculas populares del momento */
  getPopularMovies(): Promise<any> {
    return this.getFromTMDB('movie/popular');
  }

  /* Obtiene la informacion especifica que una pelicula por medio de su ID */
  getMovieDetails( id:string ): Promise<any> {
    return this.getFromTMDB(`movie/${id}`);
  }

  /* Reparto que participa en la pelicula por medio de su ID */
  getMovieCredits( id:string ): Promise<any> {
    return this.getFromTMDB(`movie/${id}/credits`);
  }

  /* Lista de peliculas similares por medio de su ID */
  getMovieSimilar( id:string ): Promise<any> {
    return  this.getFromTMDB(`movie/${id}/similar`)
  }

  /* Obtiene un objeto con los actores mas populares del momento */
  getPeoplePopular(): Promise<any> {
    return this.getFromTMDB(`person/popular`);
  }

  /* Obtiene informacion detallada de una Persona por medio de su ID */
  getDetailPeople( id:string ): Promise<any>{
    return this.getFromTMDB(`person/${id}`)
  }

  /* Obtiene filmografia de la persona por medio de su ID */
  getPersonMovieCredits( id:string ): Promise<any>{
    return this.getFromTMDB(`person/${id}/movie_credits`)
  }

}
