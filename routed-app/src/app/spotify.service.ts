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
        'Bearer BQCPeAvuZ6X_rX7gxsjXYw4nXXjEfzQxI1DQuQyIP-YfNeA0C92FsPbOQbFBxtXnmBMTczxCdWvB9i35LD9UoDlfRQELesUlL9WFM8iv2IFYV1h2ZdnjAGV-xxyVgbOqAq8J1sFFvGAUcLISq1FgzlgposUvVQU'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}

