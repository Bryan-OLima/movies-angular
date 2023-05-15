import { Component, Input, OnChanges } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertOkComponent } from '../.alerts/alert-ok/alert-ok.component';
import { AlertDeletedComponent } from '../.alerts/alert-deleted/alert-deleted.component';

@Component({
  selector: 'small-card',
  templateUrl: './movie-small-card.component.html',
  styleUrls: ['./movie-small-card.component.scss']
})
export class MovieSmallCardComponent implements OnChanges {

  @Input() public poster: string = '';
  @Input() public isFavorite: boolean = false;
  @Input() public rating: any = '';
  @Input() public type: string = '';
  @Input() public name: string = '';
  @Input() public id: string = '';
  
  public posterLink: string = `https://image.tmdb.org/t/p/w500`;
 
  constructor(private _snackBar: MatSnackBar){}

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

  okAlert(name:string){
    this._snackBar.openFromComponent(AlertOkComponent, {duration: 2000, data: name});
  }

  deletedAlert(name: string){
    this._snackBar.openFromComponent(AlertDeletedComponent, {duration: 2000, data: name});
  }
}