import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExternalApiService } from 'src/app/services/external-api.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit{
  mobile = false;
  movie: any;
  youtubeKey: string = '';

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _externalApi: ExternalApiService,
  ) {}

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(){
    const id = this._activatedRoute.snapshot.params['id'];
    const movie =  this._externalApi.getMovieById(id);
    const serie = this._externalApi.getTvShowById(id);
    
    movie.subscribe({
      next: (res) => {
        this.getYoutubeKey(id);
        this.movie = res;
      },
      error: () => {
        serie.subscribe({
          next: (res) => {
            console.log(this.movie = res);
            this.getYoutubeKey(id);
            this.movie = res
          },
          error: () => {
            console.log('erro ao pegar filme ou série');
          }
        })
      }
    });
  }

  getYoutubeKey(id:number) {
    id = Number(id);
    this._externalApi.getTvShowTrailer(id).subscribe({
      next: (res) => {
        this.youtubeKey = res.results[0].key;
      },
      error: () => {
        this._externalApi.getMovieTrailer(id).subscribe({
          next: (res) => {
            this.youtubeKey = res.results[0].key;
          }
        });
      }
    });
  }

}
