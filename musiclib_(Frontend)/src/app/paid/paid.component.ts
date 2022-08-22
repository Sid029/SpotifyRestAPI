import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { payment } from '../entities/payment';
import { Purchased } from '../entities/purchased';
import { AuthService } from '../services/auth.service';
import { Search2Service } from '../services/search2.service';

@Component({
  selector: 'app-paid',
  templateUrl: './paid.component.html',
  styleUrls: ['./paid.component.css']
})
export class PaidComponent implements OnInit {
  public albumId: any;
  public album:any;
  public tracks:any;
  public purchasedalbums!:Purchased[];
  public inp: any;

  back(){
    this.router.navigate(['artist/'+this.album.artists[0].id])
  }

  
  constructor(private route:ActivatedRoute,public spot:Search2Service,private router:Router,public auth:AuthService) { }
  id!:string;

getid(){
  var x = localStorage.getItem('id');
  return Number(x);
} 

  purchase:Purchased = new Purchased();
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
      if(this.purchase.favorite==false)
      {
        alert(this.purchase.album_name+" has been removed from your favorites.");
      }
      else
      {
        alert(this.purchase.album_name+" has been added to your favorites!");
      }
        window.location.reload();
    });
  }



  ngOnInit(): void {


    this.id = localStorage.getItem('id') || '';
        this.auth.getPaid(this.id).subscribe(data => 
        { 
          this.purchasedalbums = data;
          console.log(data);
        });

    // this.auth.getAlbumPurchaseds().subscribe(data => { 
    //    this.purchasedalbums = data;
    //    if(this.albumId==this.getid())
    //    {
    //     console.log(this.purchasedalbums);
    //    }
    //   });
  }
}
