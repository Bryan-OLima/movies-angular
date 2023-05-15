import { Component, Inject, inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-alert-ok',
  templateUrl: './alert-ok.component.html',
  styleUrls: ['./alert-ok.component.scss']
})
export class AlertOkComponent {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: string
    ){}
    
  public snackBarRef = inject(MatSnackBarRef)
}
