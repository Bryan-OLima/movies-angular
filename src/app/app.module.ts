//Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//App Modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Angular Material Modules
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

//Pages Modules
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { MovieHighlightComponent } from './components/movie-highlight/movie-highlight.component';
import { MovieSmallCardComponent } from './components/movie-small-card/movie-small-card.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    AboutPageComponent,
    NotFoundPageComponent,
    MovieHighlightComponent,
    MovieSmallCardComponent,
    ConfirmationDialogComponent,
    SearchPageComponent,
    FooterComponent,
    FavoritesPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
