import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Artist } from '../entities/artist';
import { Follow } from '../entities/Follow';
import { Purchased } from '../entities/purchased';
import { Related } from '../entities/Related';
import { AuthService } from '../services/auth.service';
import { Search2Service } from '../services/search2.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  public artist = new Artist;
  public purchasedalbums!:Purchased[];
  public relatedartists = new Related;
  public follow = new Follow;
  follows!: any[];
  public artistId!:string;
  public flw = new Follow;
  
  public albums!:any;
  art:Follow = new Follow();
  public tempfol:any;
  public artID= this.artistId;
  
  
  FollowSubmitted(artistname:any,artistphoto:any){
    this.art.artist_name=artistname;
    this.art.artist_id=this.artistId;
    this.art.photo_url=artistphoto;
    this.art.user_id=Number(localStorage.getItem('id'));
    this.art.following=true;
    console.log(this.art.following)
    this.tempfol=this.art.following
    return this.auth.follow(this.art).subscribe((res)=>
    this.router.navigate(['follow']),
    );

  }
  
  go(){
    this.router.navigate(['follow'])
  }
  
  UnfollowSubmitted(artistname:any,artistphoto:any,artist_id:any,id:any){
    this.art.id=id;
    this.art.artist_name=artistname;
    this.art.artist_id=artist_id;
    this.art.photo_url=artistphoto;
    this.art.user_id=Number(localStorage.getItem('id'));
    this.art.following=false;
    return this.auth.unfollow(this.art).subscribe((res)=>{
      window.location.reload();
    });
  }
  
  back(){
    history.back()
  }
  
  getid(){
    return Number(localStorage.getItem('id'))
  }
  
  public counter = false;
  public counter2 = false;
  

  test(){
    console.log(this.follows[0].following)
    console.log(this.follows[0].artist_name);

  }   
  public x=localStorage.getItem('id')+"";


  constructor(private route:ActivatedRoute,private spotart:Search2Service,public auth:AuthService,private router:Router) { }
  id!: string;
  public xyz: any;
  ngOnInit(): void {
    
    this.route.paramMap.subscribe((param:ParamMap)=>{
      this.artistId=param.get('id')+'';
      this.xyz=this.artistId;
    });
    
    this.spotart.getartist(this.artistId).subscribe((data)=>{
      this.artist.name=data.name;
      this.artist.followers=data.followers.total;
      this.artist.photo_url=data.images[0].url;
      this.artist.genre=data.genres[1];
    });

    this.spotart.getallalbums(this.artistId).subscribe((data)=>{
      this.albums=data.items;
    });

    this.spotart.getrelatedartists(this.artistId).subscribe((data)=>{
      this.relatedartists = data;
    })

    this.auth.getfollow(this.getid()).subscribe((data)=>{
      this.follow = data; 
      this.follows = data;
      console.log(this.follow);
      for(let i=0;i<this.follows.length;i++)
      {
        if(this.follows[i].following == true && this.follows[i].artist_name==this.artist.name)
        {
          this.counter=true;
        }
      }
    })
    // this.auth.getPaid(this.x).subscribe(data => 
    // {   
    //   this.purchasedalbums = data;
    //   console.log(data);
    //   for(let i=0;i<this.purchasedalbums.length;i++)
    //   { 
    //     for(let j=0;j<this.albums.length;j++)
    //     {
    //       if(this.purchasedalbums[i].purchase_date != null && this.purchasedalbums[i].album_id == this.albums[j].id)
    //       {
    //         this.counter2=true;
    //       }
    //     }
    //   }
    //});


}

  }

