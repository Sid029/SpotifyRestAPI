//@ts-nocheck

import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Users } from '../entities/users';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  public usertemp!:any;
  //public usertemp!:Users[];
  constructor(private auth:AuthService) { }

  click : boolean = true;

 

  UpdateForm = new FormGroup({
    username: new FormControl(),
    email:new FormControl(),
    password: new FormControl(),
    cd: new FormControl()
  });

  onCancel(){
    this.UpdateForm.controls['username'].disable();
    this.UpdateForm.controls['email'].disable();
    this.UpdateForm.controls['password'].disable();
    this.UpdateForm.patchValue({username: this.usertemp.username});
    this.UpdateForm.patchValue({email: this.usertemp.email});
    this.UpdateForm.patchValue({password: this.usertemp.password});
    this.UpdateForm.patchValue({cd: this.usertemp.creationdate});
    this.click = !this.click;
  }


  onButtonClick(){
    this.UpdateForm.controls['username'].enable();
    this.UpdateForm.controls['email'].enable();
    this.UpdateForm.controls['password'].enable();
    this.click = !this.click;
  }

  UpdateFormSubmitted(){
    const user = new Users();

    user.id=this.getid();
    user.username=this.UpdateForm.value.username+"";
    user.email=this.UpdateForm.value.email+"";
    user.password=this.UpdateForm.value.password+"";
    user.creationdate=this.UpdateForm.value.cd+"";
    console.log(user.id,user.username,user.email,user.password,user.creationdate)
    this.auth.updateUser(user).subscribe((res)=>
    window.location.reload()
    )
  }

  
  getid(){
    return Number(localStorage.getItem('id'));
  }

  public temp:any;
  ngOnInit(): void {
    this.auth.getUser(this.getid()).subscribe(data=>{
      this.usertemp=data;
      console.log(this.usertemp)
      this.UpdateForm.controls['username'].disable();
      this.UpdateForm.controls['email'].disable();
      this.UpdateForm.controls['password'].disable();
      setTimeout(() => 
      this.UpdateForm.patchValue({username: this.usertemp.username}));
      this.UpdateForm.patchValue({email: this.usertemp.email});
      this.UpdateForm.patchValue({password: this.usertemp.password});
      this.UpdateForm.patchValue({cd: this.usertemp.creationdate});

      // this.UpdateForm.patchValue({username: this.usertemp[this.getid()].username}));
      // this.UpdateForm.patchValue({email: this.usertemp[this.getid()].email});
      // this.UpdateForm.patchValue({password: this.usertemp[this.getid()].password});
      // this.UpdateForm.patchValue({cd: this.usertemp[this.getid()].creationdate});
          })
  }

}
