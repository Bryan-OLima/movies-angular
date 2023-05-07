import { Component, OnInit } from '@angular/core';
import { ExternalApiService } from 'src/app/services/external-api.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  searchList: any[] = [];

  constructor(private _externalApi: ExternalApiService){}

  ngOnInit(): void {
    this.getInitialData();
  }

  searchMovieOrTv(search: string){
    if(!search.trim()){
      this.getInitialData();
    } else {
      this._externalApi.searchMoviesAndTv(search).subscribe({
        next: (res: any) => {
         this.searchList = res.results;
        },
        error: () => {
        }
      });
    }
  }

  getInitialData(){
    this._externalApi.getAllTrending().subscribe({
      next: (res:any) => {
       this.searchList = res.results;
      },
      error: () => {
      }
    });
  }
}