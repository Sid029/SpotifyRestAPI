import { Component, OnInit } from '@angular/core';
import { Data } from '../entities/data';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private authservice:AuthService) { }

  // searchQuery!:string;
  // public artists=[];
  // datas!:Data[]
  ngOnInit(): void {
    // this.authservice.getMusicData().subscribe(x => { this.datas = x; console.log(x)});
  }


}
