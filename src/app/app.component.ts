import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `
})
export class AppComponent {
}
