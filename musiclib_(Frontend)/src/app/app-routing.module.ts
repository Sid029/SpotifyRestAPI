import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { AuthGuard } from './auth.guard';
import { CategoryExampleTrackComponent } from './category-example-track/category-example-track.component';
import { CategoryExampleComponent } from './category-example/category-example.component';
import { CategoryComponent } from './category/category.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { FollowingComponent } from './following/following.component';
import { LoginComponent } from './login/login.component';
import { NewComponent } from './new/new.component';
import { NewreleaseComponent } from './newrelease/newrelease.component';
import { PaidComponent } from './paid/paid.component';
import { PaymentcheckComponent } from './paymentcheck/paymentcheck.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { AuthService } from './services/auth.service';
import { SpotComponent } from './spot/spot.component';
import { TestComponent } from './test/test.component';
import { TestingdataComponent } from './testingdata/testingdata.component';
import { UserinfoComponent } from './userinfo/userinfo.component';

const routes: Routes = [
  { path: '' , component: NewComponent, pathMatch: "full"},
  { path: 'login' , component: LoginComponent},
  { path: 'register' , component: RegisterComponent},
  { path: 'test', component:TestComponent},
  { path: 'paymentcheck/:id', component:PaymentcheckComponent,canActivate:[AuthGuard]},
  { path: 'search', component:SearchComponent},
  { path: 'home', component:NewreleaseComponent},
  { path: 'spot', component:SpotComponent},
  { path: 'paid', component:PaidComponent,canActivate:[AuthGuard]},
  { path: 'paid/:id', component:PaidComponent,canActivate:[AuthGuard]},
  { path: 'testingdata', component:TestingdataComponent},
  { path: 'fav', component:FavoritesComponent,canActivate:[AuthGuard]},
  { path: 'new', component:NewComponent},
  { path: 'follow', component:FollowingComponent,canActivate:[AuthGuard]},
  { path: 'artist/:id', component:ArtistComponent},
  { path: 'album/:id', component:AlbumComponent},
  { path: 'user',component:UserinfoComponent,canActivate:[AuthGuard]},
  { path: 'cat',component:CategoryComponent},
  { path: 'cat/:id',component:CategoryExampleComponent},
  { path: 'catplay/:id',component:CategoryExampleTrackComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents =[
  LoginComponent,
  RegisterComponent,
  TestComponent,
  SearchComponent,
  PaymentcheckComponent
]
