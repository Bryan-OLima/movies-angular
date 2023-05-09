import { Component, HostBinding, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AlertOkComponent } from 'src/app/components/alerts/alert-ok/alert-ok.component';
import { ExternalApiService } from 'src/app/services/external-api.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit{
    
  @HostBinding('style.background-image')
  bgImage: string = '';

  movie: any;
  youtubeKey: string = '';

  constructor(
    private _snackBar: MatSnackBar,
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
        this.bgImage = `linear-gradient(to bottom, rgba(0,0,0, .7), #110907 100%), url('https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${this.movie?.backdrop_path}'`;
      },
      error: () => {
        serie.subscribe({
          next: (res) => {
            this.getYoutubeKey(id);
            this.movie = res
            this.bgImage = `linear-gradient(to bottom, rgba(0,0,0, .7), #110907 100%), url('https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${this.movie?.backdrop_path}'`;
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
    this._externalApi.getMovieTrailer(id).subscribe({
      next: (res) => {
        this.youtubeKey = res.results[0]?.key;
      },
      error: () => {
        this._externalApi.getTvShowTrailer(id).subscribe({
          next: (res) => {
            this.youtubeKey = res.results[0].key;
          }
        });
      }
    });
  }

  openAlert(name:string){
    this._snackBar.openFromComponent(AlertOkComponent, {duration: 2000, data: name});
  }
}
