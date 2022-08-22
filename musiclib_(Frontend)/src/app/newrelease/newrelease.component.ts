import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-newrelease',
  templateUrl: './newrelease.component.html',
  styleUrls: ['./newrelease.component.css']
})
export class NewreleaseComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

}
