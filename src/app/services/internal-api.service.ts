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

  getFavorites(): Observable<any>{
    return this._http.get<any>(`${this._apiUrl}/api/media`);
  }

  getFavoriteById(id:number): Observable<any>{
    return this._http.get<any>(`${this._apiUrl}/media/${id}`);
  }

  setFavorite(movie: Movie): Observable<Movie>{
    return this._http.post<Movie>(`${this._apiUrl}/api/media`, movie);
  }

  deleteFavorite(id:number): Observable<any>{
    return this._http.delete<any>(`${this._apiUrl}/api/media/${id}`);
  }
}
