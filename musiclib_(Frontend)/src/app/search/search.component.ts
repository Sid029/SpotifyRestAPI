import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Search2Service } from '../services/search2.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchQuery!:string;
  // public artists=[];

  constructor(private authservice:AuthService,private searchspot:Search2Service) { }
  public searchArtists(){
    this.searchspot.getallartists(this.searchQuery).subscribe((data) =>{
      // this.artists=data.artists.items;
    });
  }

  
  ngOnInit(): void {
  }

}
