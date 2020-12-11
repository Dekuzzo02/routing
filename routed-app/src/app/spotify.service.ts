import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

 constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQC9AQktp1IpMMkNoxdgjCXObew3TxV65bHUBSoExAG1kbSXfKcNAEEuK2VoqXFPggDeudU-a5u3vNfzgZkAPqAEf_RBN7QuXz9JW1JX2pQ7gil0JmXI6S2ot_CXdarqpFl8Blpd6qqRMZrRyRe5-vKAw6T08WY'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}

