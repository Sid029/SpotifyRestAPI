//@ts-nocheck


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Search2Service {
  private authkey = 'Bearer BQA8G-YrzqFIlVDNVP-kpr0xVQCEULD_jSUROwMAIA19FET9U3XsjkQt5lX_JEl9z3cd6ivGdQ0RacV-wkWGtkW_iuM6cA22zDFlwRESNeAQH3zNX6O3DuDP55cNv76sKPaTOSZqzpLVnhogCkLiz63Mj-rMpX26b5OYz01w1YiOav38nec-YMXRP0DRuu0';

  private httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': this.authkey
  })
  };

  constructor(private http:HttpClient) { }
  public getallartists(searchQuery: string):Observable<any>{
    let artistURL='https://api.spotify.com/v1/search?q='+searchQuery+'&type=artist';
    return this.http.get<any>(artistURL,this.httpOptions)
  }
  
  public getartist(artistId: string):Observable<any>{
    let artistURL='https://api.spotify.com/v1/artists/'+artistId;
    return this.http.get<any>(artistURL,this.httpOptions)
  }
  
  public getallalbums(artistId: string):Observable<any>{
    let albumURL = 'https://api.spotify.com/v1/artists/'+artistId+'/albums';
    return this.http.get<any>(albumURL,this.httpOptions)
  }
  
  public getalbum(albumId: string):Observable<any>{
    let albumURL = 'https://api.spotify.com/v1/albums/'+albumId;
    return this.http.get<any>(albumURL,this.httpOptions)
  }
  
    public getalltracks(albumId: string):Observable<any>{
      let tracksURL='https://api.spotify.com/v1/albums/'+albumId+'/tracks';
      return this.http.get<any>(tracksURL,this.httpOptions)
    }

    public getnewrelease():Observable<any>{
      let newreleaseURL='https://api.spotify.com/v1/browse/new-releases?limit=40';
      return this.http.get<any>(newreleaseURL,this.httpOptions)
    }

    public getrelatedartists(artistId: string):Observable<any>{
      let relatedArtistsURL='https://api.spotify.com/v1/artists/'+artistId+'/related-artists';
      return this.http.get<any>(relatedArtistsURL,this.httpOptions)
    }

    public getcategories():Observable<any>{
      let categoryURL='https://api.spotify.com/v1/browse/categories';
      return this.http.get<any>(categoryURL,this.httpOptions);
    }

    public getcategoriesalbums(categoryId: string):Observable<any>{
      let cartegoryalbumURL = 'https://api.spotify.com/v1/browse/categories/'+categoryId+'/playlists';
      return this.http.get<any>(cartegoryalbumURL,this.httpOptions);
    }

    public getcatplaytracks(catplayId: string):Observable<any>{
      let catplaytracksURL = 'https://api.spotify.com/v1/playlists/'+catplayId+'/tracks';
      return this.http.get<any>(catplaytracksURL,this.httpOptions)
    }

}
