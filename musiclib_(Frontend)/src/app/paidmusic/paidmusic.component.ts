import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Search2Service } from 'src/app/services/search2.service';

@Component({
  selector: 'app-paidmusic',
  templateUrl: './paidmusic.component.html',
  styleUrls: ['./paidmusic.component.css']
})
export class PaidmusicComponent implements OnInit {

  constructor(private route:ActivatedRoute,private spot:Search2Service,private router:Router) { }

  public albumId: any;
  public album:any;
  public tracks:any;

  back(){
    this.router.navigate(['artist/'+this.album.artists[0].id])
  }

  
  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:ParamMap)=>{
      this.albumId=paramMap.get('id');
    })

    this.spot.getalbum(this.albumId).subscribe((data)=>{
      this.album=data;
    })

    this.spot.getalltracks(this.albumId).subscribe((data)=>{
      this.tracks=data.items;
    })

  }

}
