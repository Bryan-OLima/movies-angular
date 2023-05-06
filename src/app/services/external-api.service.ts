import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../interfaces/movies.interface';

import { API_KEY } from '.config/config.env';

@Injectable({
  providedIn: 'root'
})
export class ExternalApiService {

  private _apiUrl: string = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}`;
  private _apiUrlById: string = 'https://api.themoviedb.org/3';

  constructor(private _http:HttpClient){}

  searchMoviesAndTv(search:string): Observable<Movie>{
    // https://api.themoviedb.org/3/search/movie?api_key=b431800d46a957987d0136e30fe42f05&language=pt-BR&query=wednesd&page=1&include_adult=false
    // https://api.themoviedb.org/3/search/multi?api_key=b431800d46a957987d0136e30fe42f05&language=pt-BR&query=The%20Office&page=1&include_adult=false
    return this._http.get<Movie>(`${this._apiUrl}&language=pt-BR&query=${search}&page=1&include_adult=false`);
  }

  getMovieById(id:number): Observable<Movie>{
    return this._http.get<Movie>(`${this._apiUrlById}/movie/${id}?api_key=${API_KEY}&language=pt-BR`);
  }

  getTvShowById(id:number): Observable<Movie>{
    return this._http.get<Movie>(`${this._apiUrlById}/tv/${id}?api_key=${API_KEY}&language=pt-BR`);
  }
  // trailer end point 
  // https://api.themoviedb.org/3/movie/47931/videos?api_key=b431800d46a957987d0136e30fe42f05&language=pt-BR

  // backdrop endpoint
  // https://image.tmdb.org/t/p/w500/${backdrop} ou posterpath
}