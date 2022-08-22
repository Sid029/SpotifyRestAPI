import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormArrayName } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { PaymentcheckComponent } from './paymentcheck/paymentcheck.component';
import { SpotComponent } from './spot/spot.component';
import { SearchComponent } from './search/search.component';
import { SearchTrackComponent } from './search-track/search-track.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { NewreleaseComponent } from './newrelease/newrelease.component';
import { PaidComponent } from './paid/paid.component';
import { ListenmusicComponent } from './listenmusic/listenmusic.component';
import { TestingdataComponent } from './testingdata/testingdata.component';
import { NewComponent } from './new/new.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { FollowingComponent } from './following/following.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { CategoryComponent } from './category/category.component';
import { CategoryExampleComponent } from './category-example/category-example.component';
import { CategoryExampleTrackComponent } from './category-example-track/category-example-track.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PaymentcheckComponent,
    SearchComponent,
    SpotComponent,
    SearchTrackComponent,
    ArtistComponent,
    AlbumComponent,
    NewreleaseComponent,
    PaidComponent,
    ListenmusicComponent,
    TestingdataComponent,
    NewComponent,
    FavoritesComponent,
    FollowingComponent,
    UserinfoComponent,
    CategoryComponent,
    CategoryExampleComponent,
    CategoryExampleTrackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
