import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../interfaces/movies.interface';

@Injectable({
  providedIn: 'root'
})
export class InternalApiService {

  private _apiUrl: string = 'http://localhost:3000';

  constructor(private _http:HttpClient){}

  getMovies(): Observable<Movie>{
    return this._http.get<Movie>(`${this._apiUrl}/api/media`);
  }

  getMoviesById(id:number): Observable<Movie>{
    return this._http.get<Movie>(`${this._apiUrl}/media/${id}`);
  }

  setMovie(movie: Movie): Observable<Movie>{
    return this._http.post<Movie>(`${this._apiUrl}/api/media`, movie);
  }

  deleteMovie(id:number): Observable<Movie>{
    return this._http.delete<Movie>(`${this._apiUrl}/api/media/${id}`);
  }
}
