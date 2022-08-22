// @ts-nocheck
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Artist } from '../entities/artist';
import { Search2Service } from '../services/search2.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  public artist = new Artist;

  public artistId!:string;

  public newreleases!:any;

  constructor(private spotart:Search2Service) { }

  ngOnInit(): void {

 this.spotart.getnewrelease().subscribe((data)=>{
  this.newreleases=data.albums.items;
    }
    );
  }

}
