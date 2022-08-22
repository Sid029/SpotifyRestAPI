// @ts-nocheck

import { Component } from '@angular/core';
import { Route, Router, UrlSerializer } from '@angular/router';
import { Users } from './entities/users';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'musiclib';

  constructor (public AuthService:AuthService,private router:Router){}

  user!:Users;

  logout(){
    sessionStorage.removeItem('email')
    this.AuthService.logout();
  }

  func(){
    var x = sessionStorage.getItem('email');
    if(x!=null)
    {
      //this.router.navigate(['/account/home']);
      this.router.navigate(['/newrelease']);
    }
    else
    {
      this.router.navigate(['/newrelease']);
    }
    return x
  }

  public temp:any;
  ngOnInit(): void {
    
    if(sessionStorage.getItem('email')!=null)
    {
      this.AuthService.isAuthenticated=true;
    }
  }

}
