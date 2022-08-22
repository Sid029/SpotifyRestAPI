import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Search2Service } from '../services/search2.service';
import { SpotComponent } from '../spot/spot.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  constructor(private spot:Search2Service) { }
  id!: string;
  public xyz: any;
  category!:any;
  ngOnInit(): void {
    this.spot.getcategories().subscribe((data)=>{
      this.category=data.categories.items;
    })
    
  }

}
