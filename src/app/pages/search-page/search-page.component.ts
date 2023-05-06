import { Component, OnChanges, OnInit } from '@angular/core';
import { ExternalApiService } from 'src/app/services/external-api.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit, OnChanges {
  searchList: any[] = [];

  constructor(private externalApi: ExternalApiService) {}

  ngOnInit(): void {
    this.getInitialData();
  }

  ngOnChanges(): void {
    if(this.searchList.length < 1){
      this.getInitialData();
    }
  }

  searchMovieOrTv(search: string){
    if(!search.trim()){
      this.getInitialData();
    } else {
      this.externalApi.searchMoviesAndTv(search).subscribe({
        next: (res: any) => {
         this.searchList = res.results;
        },
        error: () => {
        }
      });
    }
  }

  getInitialData(){
    this.externalApi.getAllTrending().subscribe({
      next: (res:any) => {
       this.searchList = res.results;
      },
      error: () => {
      }
    });
  }
}
