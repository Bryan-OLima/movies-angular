import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';

const title: string = 'The Movies'
const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: `${title} - Home`
  },
  {
    path: 'pesquisar',
    component: SearchPageComponent,
    title: `${title} - Pesquisar`
  },
  {
    path: 'favoritos',
    component: FavoritesPageComponent,
    title: `${title} - Favoritos`
  },
  {
    path: 'detalhes/:id',
    component: DetailsPageComponent,
    title: `${title} - Detalhes`
  },
  {
    path: 'sobre',
    component: AboutPageComponent,
    title: `${title} - Sobre`
  },
  {
    path: '**',
    component: NotFoundPageComponent,
    title: `${title} - 404`
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
