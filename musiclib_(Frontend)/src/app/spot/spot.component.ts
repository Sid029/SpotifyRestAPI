import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Search2Service } from '../services/search2.service';

@Component({
  selector: 'app-spot',
  templateUrl: './spot.component.html',
  styleUrls: ['./spot.component.css']
})
export class SpotComponent implements OnInit {

  public searchQuery!:string;
  public artists: any;

  constructor(private searchspot:Search2Service,private router:Router,private authservice:AuthService) { }
  
  public searchArtists(){
    this.searchspot.getallartists(this.searchQuery).subscribe((data) =>{
      this.artists=data.artists.items;
    });
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('email')!=null)//checks if user was logged in already
    {
      this.authservice.isAuthenticated=true;
    }
  }

}
