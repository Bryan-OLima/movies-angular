import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Movie } from '../interfaces/movies.interface';

import { API_KEY } from '.config/config.env';

@Injectable({
  providedIn: 'root'
})
export class ExternalApiService {

  private _apiUrl: string = 'https://api.themoviedb.org/3';

  constructor(private _http:HttpClient){}

  searchMoviesAndTv(search:string): Observable<Movie>{
    // https://api.themoviedb.org/3/search/movie?api_key=b431800d46a957987d0136e30fe42f05&language=pt-BR&query=wednesd&page=1&include_adult=false
    // https://api.themoviedb.org/3/search/multi?api_key=b431800d46a957987d0136e30fe42f05&language=pt-BR&query=The%20Office&page=1&include_adult=false
    return this._http.get<Movie>(`${this._apiUrl}/search/multi?api_key=${API_KEY}&language=pt-BR&query=${search}&page=1&include_adult=false`);
  }

  getMovieById(id:number): Observable<Movie>{
    return this._http.get<Movie>(`${this._apiUrl}/movie/${id}?api_key=${API_KEY}&language=pt-BR`);
  }

  getTvShowById(id:number): Observable<Movie>{
    return this._http.get<Movie>(`${this._apiUrl}/tv/${id}?api_key=${API_KEY}&language=pt-BR`);
  }

  getAllTrending(): Observable<any>{
    return this._http.get<any>(`${this._apiUrl}/trending/movie/day?api_key=${API_KEY}&language=pt-BR&include_adult=false`);
  }

  getSocialsIds(id:number): Observable<any>{
    // https://api.themoviedb.org/3/movie/76600/external_ids?api_key=b431800d46a957987d0136e30fe42f05
    return this._http.get<any>(`${this._apiUrl}/movie/${id}/external_ids?api_key=b431800d46a957987d0136e30fe42f05`);
  }

  getMovieTrailer(id:number): Observable<any>{
    return this._http.get<any>(`${this._apiUrl}/movie/${id}/videos?api_key=b431800d46a957987d0136e30fe42f05&language=pt-BR`);
  }
  
  getTvShowTrailer(id:number): Observable<any>{
    // https://api.themoviedb.org/3/tv/100088/videos?api_key=b431800d46a957987d0136e30fe42f05&language=pt-BR
    // https://www.youtube.com/watch?v=${results.key};
    // embed trailer <iframe width="700" height="390" src="https://www.youtube.com/embed/${results.key}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; web-share" allowfullscreen></iframe>
    return this._http.get<any>(`${this._apiUrl}/tv/${id}/videos?api_key=b431800d46a957987d0136e30fe42f05&language=pt-BR`);
  }
  
  getMovieProviders(id:number){
    return this._http.get<any>(`${this._apiUrl}/movie/${id}/watch/providers?api_key=b431800d46a957987d0136e30fe42f05&language=pt-BR`);
  }

  getTvShowProviders(id:number){
    // https://api.themoviedb.org/3/movie/47931/watch/providers?api_key=b431800d46a957987d0136e30fe42f05&language=pt-BR
    // PATH result.BR.link e result.BR.buy e result.BR.rent
    return this._http.get<any>(`${this._apiUrl}/tv/${id}/watch/providers?api_key=b431800d46a957987d0136e30fe42f05&language=pt-BR`);
  }

  // backdrop endpoint
  // https://image.tmdb.org/t/p/w500/${backdrop} ou posterpath
  // https://image.tmdb.org/t/p/origina/${backdrop} ou poster path
}