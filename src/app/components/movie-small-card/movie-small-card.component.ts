import { Component, Input, OnChanges } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertOkComponent } from '../.alerts/alert-ok/alert-ok.component';
import { AlertDeletedComponent } from '../.alerts/alert-deleted/alert-deleted.component';
import { InternalApiService } from 'src/app/services/internal-api.service';
import { Movie } from 'src/app/interfaces/movies.interface';
import { AlertErrorComponent } from '../.alerts/alert-error/alert-error.component';

@Component({
  selector: 'small-card',
  templateUrl: './movie-small-card.component.html',
  styleUrls: ['./movie-small-card.component.scss']
})
export class MovieSmallCardComponent implements OnChanges {
  @Input() public isFavorite: boolean = false;
  @Input() public refreshMethod: any;
  @Input() public internalId: any = 0;
  @Input() public poster: string = '';
  @Input() public type: string = '';
  @Input() public name: string = '';
  @Input() public rating: any = '';
  @Input() public id: string = '';
  
  list: any;
  movie!: Movie;
  public posterLink: string = `https://image.tmdb.org/t/p/w500`;
 
  constructor(
    private _snackBar: MatSnackBar,
    private _internalService: InternalApiService
    ){}

  ngOnChanges(){
    this.rating = Number(this.rating).toFixed(1);
    this.verifyData();
  }

  verifyData(){
    let a = Number(this.rating);
    if(this.poster == null){
      this.posterLink = 'https://imdb-api.com/images/original/nopicture.jpg';
    }

    if(Number.isNaN(a)) {
      this.rating = 0;
    }
  }

  deleteCard(internalId: number, name: string){
    this._internalService.deleteFavorite(internalId).subscribe({
      next: () => {
        this.deleteAlert(name);

        setTimeout(() => {
          location.reload();
        }, 500);
      },

      error: (res) => {
        console.log(res.error);
      }
    })
  }

  addCard(id: string, name: string, type: string){
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
        } else {
          this._internalService.setFavorite(this.movie).subscribe({
            next: () => {
              this.okAlert(name);
            },
            error: (res) => {
              console.log(res, 'erro!');
            }
          })
        }
      },
      error: (res) => {
        console.log(res.error);
      }
    });
  }

  getData(){
    this._internalService.getFavorites().subscribe({
      next: (res) => {
        this.list = res.result;
      }
    })
  }

  private okAlert(name:string){
    this._snackBar.openFromComponent(AlertOkComponent, {duration: 2000, data: name});
  }

  private deleteAlert(name: string){
    this._snackBar.openFromComponent(AlertDeletedComponent, {duration: 2000, data: name});
  }

  private duplicateAlert(name: string){
    this._snackBar.openFromComponent(AlertErrorComponent, {duration: 3000, data: name });
  }
}