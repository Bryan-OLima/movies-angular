import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'movie-highlight',
  templateUrl: './movie-highlight.component.html',
  styleUrls: ['./movie-highlight.component.scss']
})
export class MovieHighlightComponent{ 

 constructor(private router:Router){}

goto() {
  this.router.navigateByUrl('/pesquisar');
};

}
