import { Component, OnInit } from '@angular/core';
import { Follow } from '../entities/Follow';
import { Purchased } from '../entities/purchased';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {
  id!: string;

  public follow!:Follow[];
  constructor(public auth:AuthService) { }
  purchase:Purchased = new Purchased();

  getid(){
    var x = localStorage.getItem('id');
    return Number(x);
  } 
  art:Follow = new Follow();

  UnfollowSubmitted(artistname:any,artistphoto:any,artist_id:any,id:any){
    this.art.id=id;
    this.art.artist_name=artistname;
    this.art.artist_id=artist_id;
    this.art.photo_url=artistphoto;
    this.art.user_id=Number(localStorage.getItem('id'));
    this.art.following=false;
    return this.auth.unfollow(this.art).subscribe((res)=>{
      alert('You have unfollowed '+ this.art.artist_name)
      window.location.reload();
  });
  }

  favoriteclicked(album_id:any,album_name:any,uid:any,release_date:any,artist_name:any,purchase_date:any,photo_url:any,id:any,favorite:any){
    this.purchase.pur_id=Number(id);
    this.purchase.album_id=album_id;
    this.purchase.album_name=album_name;
    this.purchase.uid=uid;
    this.purchase.release_date=release_date;
    this.purchase.artist_name=artist_name;
    this.purchase.purchase_date=purchase_date;
    this.purchase.photo_url=photo_url;
    console.log("temp ---> "+favorite)
    if(favorite == false)
    {
      this.purchase.favorite=true;
    }
    else
    {
      this.purchase.favorite=false;
    }
    return this.auth.favorite(this.purchase).subscribe(res=>{
        window.location.reload();
    });
  }

  ngOnInit(): void {
    var id = Number(localStorage.getItem('id'));
        this.auth.getfollow(id).subscribe(data => 
        { 
          this.follow = data;
          console.log(this.follow);
        });
  }


}
