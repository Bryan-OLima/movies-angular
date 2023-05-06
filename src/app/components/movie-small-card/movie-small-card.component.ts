import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'small-card',
  templateUrl: './movie-small-card.component.html',
  styleUrls: ['./movie-small-card.component.scss']
})
export class MovieSmallCardComponent implements OnChanges {

  @Input() public poster: any = '';
  @Input() public name: any = '';
  @Input() public id: any = '';
  
  public posterLink: string = `https://image.tmdb.org/t/p/w500`;

  ngOnChanges(){
    console.log(this.poster, this.name, this.id);

  }

  testFunction(texto: string){
    console.log(texto);
  }
}
