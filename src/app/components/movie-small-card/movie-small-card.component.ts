import { Component, Input, OnChanges } from '@angular/core';

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

  ngOnChanges(){
    console.log(this.poster, this.name, this.id, this.rating, this.type);
    this.rating = Number(this.rating);
  }



  testFunction(texto: string){
    console.log(texto);
  }
}
