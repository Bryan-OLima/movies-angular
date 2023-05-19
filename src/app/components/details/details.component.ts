import { Component, HostBinding, OnInit } from '@angular/core';
import { AlertOkComponent } from '../.alerts/alert-ok/alert-ok.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ExternalApiService } from 'src/app/services/external-api.service';
import { InternalApiService } from 'src/app/services/internal-api.service';
import { AlertErrorComponent } from '../.alerts/alert-error/alert-error.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{
  @HostBinding('style.background-image')
  bgImage: string = '';

  movie: any;
  youtubeKey: string = '';

  list: any;

  constructor(
    private _snackBar: MatSnackBar,
    private _activatedRoute: ActivatedRoute,
    private _externalApi: ExternalApiService,
    private _internalService: InternalApiService
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

  favoriteMedia(id: string, name: string, type: string){
    this.movie = {
      id: Number(id),
      name,
      type
    }
    this._internalService.getFavorites().subscribe({
      next: (res) => {
        this.list = res.result;
        if(this.list.some((e:any) => e.id == this.movie.id)){
          this.duplicateAlert(name);
            location.reload();
        } else {
          this._internalService.setFavorite(this.movie).subscribe({
            next: () => {
              this.okAlert(name);
                location.reload();
            },
            error: (res) => {
              console.log(res, 'erro!');
            }
          });
        }
      },
      error: (res) => {
        console.log(res.error);
      }
    });
  }

  private okAlert(name:string){
    this._snackBar.openFromComponent(AlertOkComponent, {duration: 2000, data: name});
  }
  private duplicateAlert(name: string){
    this._snackBar.openFromComponent(AlertErrorComponent, {duration: 3000, data: name });
  }
}

