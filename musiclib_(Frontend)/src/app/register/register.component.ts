import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from '../entities/users';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authservice:AuthService,private router:Router) { }

  users!: Users;

  disabled = false;

  ngOnInit(): void {
    if(sessionStorage.getItem('email')!=null)//checks if user was logged in already
    {
      this.router.navigate(['account/home']);
    }
    this.registerForm.controls['submit'].disable();
    if(this.registerForm.value.username!=''&& this.registerForm.value.email!='' && this.registerForm.value.password!=''){
      this.registerForm.controls['submit'].enable();
    }
  }
  registerForm = new FormGroup({
    username: new FormControl(''),
    email:new FormControl(''),
    password: new FormControl(''),
    confirm_password: new FormControl(''),
    submit: new FormControl('Submit')
  });

  registerSubmitted(){
    const user = new Users();
    user.username = this.registerForm.value.username+'';
    user.email = this.registerForm.value.email+'';
    user.password = this.registerForm.value.password+'';
    this.authservice.registerUser(user).subscribe(res => {
      console.log(res);//success from backend
      if(res=="Success from Backend")
      {
        alert("Successfully Registered")
        this.router.navigate(['login']);  
      }
      else
      {
        alert("Account with this email exists")
        window.location.reload();
      }
    })
  }

  onPasswordChange() {
    if (this.confirm_password.value == this.password.value) {
      this.confirm_password.setErrors(null);
      this.registerForm.controls['submit'].enable();
    } else {
      this.confirm_password.setErrors({ mismatch: true });
      this.registerForm.controls['submit'].disable();
    }
  }

  // getting the form control elements
  get password(): AbstractControl {
    return this.registerForm.controls['password'];
  }

  get username(): AbstractControl {
    return this.registerForm.controls['username'];
  }

  get email(): AbstractControl {
    return this.registerForm.controls['email'];
  }
  
  get confirm_password(): AbstractControl {
    return this.registerForm.controls['confirm_password'];
  }


}
