import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
  getTrack(trackId: string): any {
      throw new Error("Method not implemented.");
  }
  //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    //const url = `https://api.spotify.com/v1/${query}`;
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCmEHMvjwWcdNY2Q3Y01nunWFTofW5FOdulP_TMRyOJXxWSN_iUa7q9Q8jozznlzoyCKq1zKp7cWYbsHo4AKrTxUjmO5Q_VyonWfClNF2X6GauwWj-SMFtgJsd3wouMm8ZC56CzVsU6KwJRl-pZMRIVudhEtJI'
    });
    
    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
  }
}
