import { Component, OnInit } from '@angular/core';
import { ExternalApiService } from 'src/app/services/external-api.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  searchList: any[] = [];

  constructor(private externalApi: ExternalApiService) {}
  ngOnInit(): void {
    
  }

  searchMovieOrTv(search: string){
    this.externalApi.searchMoviesAndTv(search).subscribe({
      next: (res: any) => {
       this.searchList = res.results
      },
      error: () => {
      }
    });
  }
}
