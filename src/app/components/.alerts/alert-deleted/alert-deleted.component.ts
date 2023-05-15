import { Component, Inject, inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'alert-deleted',
  templateUrl: './alert-deleted.component.html',
  styleUrls: ['./alert-deleted.component.scss']
})
export class AlertDeletedComponent {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: string
    ){}
    
  public snackBarRef = inject(MatSnackBarRef);
}
