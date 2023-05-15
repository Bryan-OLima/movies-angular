import { Component, Inject, inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-alert-error',
  templateUrl: './alert-error.component.html',
  styleUrls: ['./alert-error.component.scss']
})
export class AlertErrorComponent {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: string
  ){}
    
  public snackBarRef = inject(MatSnackBarRef);
}
