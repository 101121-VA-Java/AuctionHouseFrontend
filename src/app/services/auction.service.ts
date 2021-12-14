import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Auction } from '../model/auction';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  constructor(private http: HttpClient) { }

  getArtById(objectID: number): Observable<Auction>{
    return this.http.get('https://collectionapi.metmuseum.org/public/collection/v1/objects/'+objectID)
    .pipe(
      map(response => response as Auction)
    )
  }
}
