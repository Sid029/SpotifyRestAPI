import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { payment } from '../entities/payment';
import { Purchased } from '../entities/purchased';
import { AuthService } from '../services/auth.service';
import { Search2Service } from '../services/search2.service';

@Component({
  selector: 'app-paymentcheck',
  templateUrl: './paymentcheck.component.html',
  styleUrls: ['./paymentcheck.component.css']
})
export class PaymentcheckComponent implements OnInit {

  constructor(public authservice:AuthService,private route:ActivatedRoute,private spot:Search2Service,private router:Router) { }

  pi:payment = new payment();

  public albumId: any;
  public temp=false;
  public status:any;
  public album = new Purchased();
  public tracks:any;
  


  PurchaseForm = new FormGroup({
    uid: new FormControl(localStorage.getItem('id')),
    album_id: new FormControl(''),
    album_name: new FormControl(''),
    release_date: new FormControl(''),
    artist_name: new FormControl(''),
    photo_url: new FormControl('')
  });


  back(){
     this.router.navigate(['artist/'+this.album.artist_id])
  }


  set(){
    console.log(this.pi.cardnumber);
  }

  purchase = new Purchased();

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:ParamMap)=>{
      this.albumId=paramMap.get('id');
    })

    this.spot.getalbum(this.albumId).subscribe((data)=>{
      this.album.album_id=data.id;
      this.album.album_name=data.name;
      this.album.release_date=data.release_date;
      this.album.photo_url=data.images[0].url;
      this.album.artist_name=data.artists[0].name;
      this.album.artist_id=data.artists[0].id;
    })

    this.spot.getalltracks(this.albumId).subscribe((data)=>{
      this.tracks=data.items;
    })

    this.album.uid = Number(localStorage.getItem('id'));

  }

  addmusic(){
    this.authservice.purchasedMusic(this.album).subscribe(res => {
      console.log(this.album.album_name,this.album.artist_name,this.album.photo_url)
    })
}


  paymentSubmitted()
  {
    this.temp=true;
    if(this.pi.cardnumber==null||this.pi.cvc==null||this.pi.expmonth==null||this.pi.expyear==null)
    {
      console.log("Error Payment Information incomplete.")
      alert("Error Payment Information incomplete.")
      return null;
    }
    console.log('Payment function has been called by the peer.');
    switch(this.pi.expmonth){
      case "January":
        this.pi.expmonth='1';
        break;
      case "February":
        this.pi.expmonth='2';
        break;
      case "March":
        this.pi.expmonth='3';
        break;
      case "April":
        this.pi.expmonth='4';
        break;
      case "May":
        this.pi.expmonth='5';
        break;
      case "June":
        this.pi.expmonth='6';
        break;
      case "July":
        this.pi.expmonth='7';
        break;
      case "August":
        this.pi.expmonth='8';
        break;
      case "September":
        this.pi.expmonth='9';
        break;
      case "October":
        this.pi.expmonth='10';
        break;
      case "November":
        this.pi.expmonth='11';
        break;
      case "December":
        this.pi.expmonth='12';
        break;
    }
    this.pi.value=500;
    return this.authservice.payment(this.pi).subscribe(res=>{
      // You can access status:
     console.log('Response ----> ' + res.status);
      console.log("check ->"+this.pi.cardnumber,Number(this.pi.expmonth),this.pi.expyear,this.pi.cvc,this.pi.value)
    },
    (error: HttpErrorResponse) => {
      if(error.error.text != "success")
      {
        alert(error.error.text)
        window.location.reload();
      }
      else{
        alert("Payment Success");
        this.addmusic();
        alert(this.album.album_name+ ' by '+ this.album.artist_name + ' has been added to your Purchased Album.')
        this.router.navigate(['paid'])
      }
    }
    );
  }

}
