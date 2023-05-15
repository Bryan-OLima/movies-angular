//Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//App Modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Angular Material Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackBarService } from './services/snack-bar.service';

//General Components
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MovieHighlightComponent } from './components/movie-highlight/movie-highlight.component';
import { MovieSmallCardComponent } from './components/movie-small-card/movie-small-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { AlertOkComponent } from './components/.alerts/alert-ok/alert-ok.component';
import { DetailsComponent } from './components/details/details.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { AlertDeletedComponent } from './components/.alerts/alert-deleted/alert-deleted.component';
//Pages Modules
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { ConfirmationDialogComponent } from './components/.dialogs/confirmation-dialog/confirmation-dialog.component';
import { AlertErrorComponent } from './components/.alerts/alert-error/alert-error.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    AboutPageComponent,
    NotFoundPageComponent,
    MovieHighlightComponent,
    MovieSmallCardComponent,
    SearchPageComponent,
    FooterComponent,
    FavoritesPageComponent,
    AlertOkComponent,
    DetailsPageComponent,
    DetailsComponent,
    FavoritesComponent,
    AlertDeletedComponent,
    ConfirmationDialogComponent,
    AlertErrorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  providers: [
    MatSnackBarModule
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }