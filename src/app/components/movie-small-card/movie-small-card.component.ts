import { Component, Input, OnChanges, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
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
  }

  testFunction(id: string, name: string){
    console.log(`filme adicionado á lista: ${id}: ${name}`);
  }

  openAlert(name:string){
    this._snackBar.openFromComponent(AlertOkComponent, {duration: 2000, data: name});
  }

  testAlert(movie:string){
    this._snackBar.open(`OPA! O filme ${movie} foi adicionado aos favoritos.`, 'Fechar', {duration: 2000});
  }
}
