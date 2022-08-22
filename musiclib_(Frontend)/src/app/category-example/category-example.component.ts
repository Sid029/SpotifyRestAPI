import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Catplay } from '../entities/catplay';
import { AuthService } from '../services/auth.service';
import { Search2Service } from '../services/search2.service';

@Component({
  selector: 'app-category-example',
  templateUrl: './category-example.component.html',
  styleUrls: ['./category-example.component.css']
})
export class CategoryExampleComponent implements OnInit {

  constructor(private route:ActivatedRoute,private spotart:Search2Service,private auth:AuthService,private router:Router) { }

  id!: string;
  public xyz: any;
  public catId!:string;
  public categories!:any;

  back(){
    history.back()
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param:ParamMap)=>{
      this.catId=param.get('id')+'';
      this.xyz=this.catId;
    });

    this.spotart.getcategoriesalbums(this.catId).subscribe((data)=>{
      this.categories=data.playlists.items;
    });
  }

}
