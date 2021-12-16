import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { ArtsByType } from '../model/arts-by-type';
import { Art } from '../model/Art';

@Injectable({
  providedIn: 'root'
})
export class ArtService {
  ids: any = null;
  arts: any = null;
  mostRecentArt: any = null;
  
  constructor(private http: HttpClient) { 
  }

  getArtIdsWithImages(): any {
    let url = 'https://collectionapi.metmuseum.org/public/collection/v1/search?q=hasImages=true';
    return this.http.get(url).pipe(map((response: any) => {
      this.ids = response.objectIDs;
    }));
  }

  getArtsByType(type: string):Observable<void> {
    let search = 'search?isPublicDomain=true&hasImage=true&q=' + type;
    let url = 'https://collectionapi.metmuseum.org/public/collection/v1/';
    return this.http.get(url+search).pipe(map(response => {
      response;
      this.ids = response;
      console.log(this.ids);
    }));
  }

  getArtById(objectID: string): Observable<Art>{
    return this.http.get('https://collectionapi.metmuseum.org/public/collection/v1/objects/'+objectID)
    .pipe(
      map(response => response as Art)
    )
  }

  listArtForAuction(data: any){
    // {
    //   "artistname": "string",
    //   "artpiecename": "string",
    //   "bidderid": 0,
    //   "highestbid": 0,
    //   "id": 0,
    //   "ownerid": 0,
    //   "url": "string"
    // }

    // 2. after the image is retrieved create the body.
    // 3. make a post request with the body to the backend. 
    return this.http.post(
      'http://localhost:8080/arts', data, { 
        headers: {'Content-type': 'application/json'},
        observe: 'response'
      }).pipe(
          map(response => {
            this.mostRecentArt = response.body;
          })
      )
    
  }
}
