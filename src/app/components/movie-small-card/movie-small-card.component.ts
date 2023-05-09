import { Component, Input, OnChanges } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertOkComponent } from '../alerts/alert-ok/alert-ok.component';

@Component({
  selector: 'small-card',
  templateUrl: './movie-small-card.component.html',
  styleUrls: ['./movie-small-card.component.scss']
})
export class MovieSmallCardComponent implements OnChanges {

  @Input() public poster: any = '';
  @Input() public rating: any = '';
  @Input() public type: any = '';
  @Input() public name: any = '';
  @Input() public id: any = '';
  
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

  openAlert(name:string){
    this._snackBar.openFromComponent(AlertOkComponent, {duration: 2000, data: name});
  }
}