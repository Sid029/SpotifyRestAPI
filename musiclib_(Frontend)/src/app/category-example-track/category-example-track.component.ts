import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Catplay } from '../entities/catplay';
import { AuthService } from '../services/auth.service';
import { Search2Service } from '../services/search2.service';

@Component({
  selector: 'app-category-example-track',
  templateUrl: './category-example-track.component.html',
  styleUrls: ['./category-example-track.component.css']
})
export class CategoryExampleTrackComponent implements OnInit {

  constructor(private route:ActivatedRoute,private spotart:Search2Service,private auth:AuthService,private router:Router) { }

  id!: string;
  public xyz: any;
  public catId!:string;
  public categoriesplay!:any;
  public category = new Catplay;
  public tempid!:any;

  back(){
    history.back();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param:ParamMap)=>{
      this.catId=param.get('id')+'';
      this.xyz=this.catId;
    });

    this.spotart.getcatplaytracks(this.catId).subscribe((data)=>{
      data.href='https://api.spotify.com/v1/playlists/37i9dQZF1DX4jP4eebSWR9/tracks?offset=0&limit=50&locale=en-US,en;q=0.9'
      this.categoriesplay=data.items;
      this.tempid=data.items.track.album.artists[0].id;
    });
  }

}
