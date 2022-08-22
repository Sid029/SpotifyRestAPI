import { Component, OnInit } from '@angular/core';
import { Purchased } from '../entities/purchased';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  id!: string;

  public purchasedalbums!:Purchased[];
  constructor(public auth:AuthService) { }
  purchase:Purchased = new Purchased();

  getid(){
    var x = localStorage.getItem('id');
    return Number(x);
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
    this.id = localStorage.getItem('id') || '';
        this.auth.getFavorite(this.id).subscribe(data => 
        { 
          this.purchasedalbums = data;
          console.log(data);
        });
  }

}
