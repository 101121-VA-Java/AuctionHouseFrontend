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
}
