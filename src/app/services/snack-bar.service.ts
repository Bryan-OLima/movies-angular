import { Injectable, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { AlertOkComponent } from '../components/alerts/alert-ok/alert-ok.component';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  
  public snackBarRef = inject(MatSnackBarRef);

  constructor(
    private _snackBar: MatSnackBar
    
    ) { 
  }

  openAlert(){
    this._snackBar.openFromComponent(AlertOkComponent, {duration: 3000,});
  }
  
  // closeAlert(){
  //   return this._snackBarRef;
  // }
}
