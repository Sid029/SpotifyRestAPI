import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpStatusCode } from '@angular/common/http';
import { Data, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Users } from '../entities/users';
import { Observable } from 'rxjs';
import { payment } from '../entities/payment';
import { Purchased } from '../entities/purchased';
import { AlbumComponent } from '../album/album.component';
import { PaymentcheckComponent } from '../paymentcheck/paymentcheck.component';
import { Follow } from '../entities/Follow';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public status:any;

  constructor(public route:Router,public http:HttpClient) { }
  isAuthenticated = false;
  x = localStorage.getItem('username');
  login(email:string,password:string){

    console.log('Service side => ' + email);
    console.log(password);
    return this.http.post<any>( environment.BASE_URL + 'Users/Login?email='+ email +'&password=' + password, null).subscribe((res: any) => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('id', res.id);
      localStorage.setItem('tokenexpiration', res.tokenExpiration);
      localStorage.setItem('username',res.username);
      sessionStorage.setItem('email',res.email);
      this.isAuthenticated=true;
      alert("Welcome "+ res.username)
      this.route.navigate(['new'])
    },
    (error: HttpErrorResponse) => {
      if(error.error.text != "success")
      {
        alert("Wrong Username or Password")
      }
  });
  }

  
  logout(){
    this.isAuthenticated=false;
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('tokenexpiration');
    localStorage.removeItem('username');
    sessionStorage.removeItem('email');
    this.route.navigate(['login'])
  }

  registerUser(user:Users){
    return this.http.post(environment.BASE_URL+"Users/CreateUser",{
      Username: user.username,
      Email: user.email,
      Password: user.password
    },
    {
      responseType:"text"
    });
  }

  purchasedMusic(purchase:Purchased){
    return this.http.post(environment.BASE_URL+"Purchaseds",{
      UID: purchase.uid,
      Album_id: purchase.album_id,
      Album_name: purchase.album_name,
      Release_date: purchase.release_date,
      Photo_Url: purchase.photo_url,
      Artist_name: purchase.artist_name
    },
    {
      responseType:"json"
    });
  }
  
  follow(art:Follow){
    alert("Successfully Followed")
    return this.http.post(environment.BASE_URL+"Artists/",{
     Artist_id: art.artist_id,
     Artist_name: art.artist_name,
     Photo_url: art.photo_url,
     User_ID: art.user_id,
     Following: art.following
    },
    {
      responseType:"json"
    });
  }

  unfollow(art:Follow){
    return this.http.delete(environment.BASE_URL+'Artists/'+art.id,{
   
    });
  }

  favorite(purchase:Purchased){
    console.log("new ---> "+purchase.uid,purchase.album_id,purchase.album_name,purchase.release_date,purchase.photo_url,purchase.artist_name,purchase.favorite,purchase.pur_id)
    return this.http.put(environment.BASE_URL+"Purchaseds/"+purchase.pur_id,{
      ID: purchase.pur_id,
      UID: purchase.uid,
      Album_id: purchase.album_id,
      Album_name: purchase.album_name,
      Release_date: purchase.release_date,
      Purchase_date: purchase.purchase_date,
      Artist_name: purchase.artist_name,
      Photo_Url: purchase.photo_url,
      Favorite: purchase.favorite
    },
    {
      responseType:"json"
    });
  }

  updateUser(user:Users){
    alert("Updated successfuly!")
    return this.http.put(environment.BASE_URL+"Users/"+user.id,{
      ID: user.id,
      Username: user.username,
      Email:user.email,
      Password: user.password,
      Creationdate: user.creationdate
    },
    {
      responseType:"json"
    });
  }

  getAlbumPurchaseds():Observable<Purchased[]>{
    return this.http.get<Purchased[]>(environment.BASE_URL+"Purchaseds");
  }

  payment(pay:payment):Observable<any>{
    console.log(pay.cardnumber,pay.expmonth,pay.expyear,pay.cvc,pay.value);
    if(pay.cardnumber == null|| pay.expmonth == null|| pay.expyear == null || pay.cvc == null)
    {
      alert("Error Payment information is incomplete");
    }

    return this.http.post(environment.BASE_URL + "Payment/pay",
     {
      cardnumber: pay.cardnumber,
      month: pay.expmonth,
      year: pay.expyear,
      cvc: pay.cvc,
      value: pay.value
    },
    {
      responseType: 'json'  
    }
    );
  }


  getUser(id:number):Observable<Users[]>{
    return this.http.get<Users[]>(environment.BASE_URL+'Users/'+id);
  }

  getPaid(id:string):Observable<Purchased[]>{
    return this.http.get<Purchased[]>(environment.BASE_URL+'Purchaseds/getuid/'+id);
  }

  public getfollow(uid:number):Observable<any>{
    return this.http.get<Follow[]>(environment.BASE_URL+'Artists/getuid/'+uid);
  }

  getFavorite(id:string):Observable<Purchased[]>{
    return this.http.get<Purchased[]>(environment.BASE_URL+'Purchaseds/getfav/'+id);
  }

  getMusicData():Observable<Data[]>{
    return this.http.get<Data[]>(environment.BASE_URL+'Spotify');
  }


  getCode(){
    return this.http.get(
      environment.BASE_URL+'/paymentcheck',
       {observe: 'response'}
   ).subscribe(response => {
   
   }, error => {
         // You can access status:
         console.log(error.status);
   });
   
  }
}
