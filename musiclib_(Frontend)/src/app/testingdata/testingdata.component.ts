import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Purchased } from '../entities/purchased';
import { AuthService } from '../services/auth.service';
import { Search2Service } from '../services/search2.service';

@Component({
  selector: 'app-testingdata',
  templateUrl: './testingdata.component.html',
  styleUrls: ['./testingdata.component.css']
})
export class TestingdataComponent implements OnInit {

  public purchasedalbums!:Purchased[];

  constructor(private route:ActivatedRoute,public spot:Search2Service,private router:Router,private auth:AuthService) { }

getid(){
  var x = localStorage.getItem('id');
  return Number(x);
}

  ngOnInit(): void {
    this.auth.getAlbumPurchaseds().subscribe(data => { 
       this.purchasedalbums = data;
       console.log(data)
       console.log(this.purchasedalbums);
      });
  }
}
