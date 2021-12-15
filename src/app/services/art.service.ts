import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ArtsByType } from '../model/arts-by-type';
import { Auction } from '../model/auction';

@Injectable({
  providedIn: 'root'
})
export class ArtService {
  private ids: any = null;
  public arts: any = null;
  
  constructor(private http: HttpClient) { }

  setIds(ids: any){
    this.ids = ids;
  }

  getIds(){
    return this.ids;
  }

  getArtsByType(type: string):Observable<void> {
    let search = 'search?isPublicDomain=true&hasImage=true&q=' + type;
    let url = 'https://collectionapi.metmuseum.org/public/collection/v1/';
    return this.http.get(url+search).pipe(map(response => {
      response;
      this.ids = response;
      console.log(this.getIds());
    }));
  }

  getArtById(objectID: string): Observable<Auction>{
    return this.http.get('https://collectionapi.metmuseum.org/public/collection/v1/objects/'+objectID)
    .pipe(
      map(response => response as Auction)
    )
  }

  createAuction(): Observable<Auction>{
    // {
    //   "artistname": "string",
    //   "artpiecename": "string",
    //   "bidderid": 0,
    //   "highestbid": 0,
    //   "id": 0,
    //   "ownerid": 0,
    //   "url": "string"
    // }
    // 1. hit the third-party API and get one random image.
    // 2. after the image is retrieved create the body.
    // 3. make a post request with the body to the backend. 
    let body: any = {}; 
    return this.http.post('http://3.141.200.91:8081/', body)
    .pipe(
      map(response => response as Auction)
    )
  }
}
