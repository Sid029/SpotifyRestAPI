import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import { Purchased } from '../entities/purchased';
import { Search2Service } from '../services/search2.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  constructor(private route:ActivatedRoute,private spot:Search2Service,private router:Router) { }

  public albumId: any;
  public album= new Purchased;
  public tracks:any;

  back(){
    history.back()
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:ParamMap)=>{
      this.albumId=paramMap.get('id');
    })

    this.spot.getalbum(this.albumId).subscribe((data)=>{
      this.album.album_id=data.id;
      this.album.photo_url=data.images[0].url;
      this.album.album_name=data.name;
      this.album.release_date=data.release_date;
      this.album.artist_id=data.artists[0].id;
    })

    this.spot.getalltracks(this.albumId).subscribe((data)=>{
      this.tracks=data.items;
    })

  }
     

}

