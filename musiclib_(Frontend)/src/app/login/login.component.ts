import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  ngOnInit(): void {
    if(sessionStorage.getItem('email')!=null)
    {
      this.router.navigate(['account/home'])
    }
  }


  form!: FormGroup;
  isUserValid: boolean = false;

  constructor(public loginAuth: AuthService, private fb:FormBuilder,private router:Router) 
  {
    this.form = this.fb.group({
      email:['', Validators.required],
      password:['', Validators.required]
    })
   }
   loginSubmitted() {
    const value = this.form.value;
    return this.loginAuth.login(value.email,value.password);
  }
}
