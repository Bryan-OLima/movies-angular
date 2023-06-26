import { Component, OnChanges, OnInit } from '@angular/core';
import { ExternalApiService } from 'src/app/services/external-api.service';
import { InternalApiService } from 'src/app/services/internal-api.service';

@Component({
  selector: 'favorites-component',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit, OnChanges {
  public favoriteList: Array<any> = []; 
  public internalList: Array<any> = [];

  constructor( 
    private _internalService: InternalApiService,
    private _externalService: ExternalApiService
    ){}

  ngOnInit():void {
    this.getFavoriteList();
    this.getCardInfo();
  }

  ngOnChanges():void {
  }

  public getCardInfo() {
    this.internalList.map((favorite:any) => {
      this.getExternalApi(favorite.id);
    })
  }

  public getExternalApi(id:number){
    this._externalService.getMovieById(id).subscribe({
      next: (res) => {
        this.favoriteList.push(res);
        // console.log(this.favoriteList);
      },
      error: (res) => {
        console.error(`erro: ${res}`);
      }
    })
  }

  public getFavoriteList() {
    this._internalService.getFavorites().subscribe({
      next: (res) => {
        this.internalList = res.result;
        // console.log(this.internalList);
        this.getCardInfo();
      },
      error: (res) => {
        console.log(res.error);
      }
    })
  }
}