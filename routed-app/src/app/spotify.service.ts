import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
  
  constructor(private http: HttpClient) { }

  getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({Authorization: environment.oauthToken});
    console.log(url);
    return this.http.get(url, { headers });
  }

  searchTrack(query: string) {
    //const url = `https://api.spotify.com/v1/${query}`;
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({Authorization: environment.oauthToken});
    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
  }

   getArtist(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({Authorization: environment.oauthToken});
    console.log(url);
    return this.http.get(url, { headers });
  }
   
    
    
}
