import { Component, OnInit } from '@angular/core';
import { Search2Service } from '../services/search2.service';

@Component({
  selector: 'app-search-track',
  templateUrl: './search-track.component.html',
  styleUrls: ['./search-track.component.css']
})
export class SearchTrackComponent implements OnInit {

  public searchQueryTrack!:string;
  public tracks: any;

  constructor(private searchspot:Search2Service) { }
  public searchTracks(){
    this.searchspot.getalltracks(this.searchQueryTrack).subscribe((data) =>{
      this.tracks=data.tracks.items;
    });
  }

  ngOnInit(): void {
  }

}
