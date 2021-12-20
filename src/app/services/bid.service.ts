import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Bid } from '../model/Bid';

@Injectable({
  providedIn: 'root'
})

export class BidService {
  bids: Bid[] = [];
  constructor(private http: HttpClient) { }

  getAllBids() {
    let url = 'http://localhost:8080/bids';
    return this.http.get(url).pipe(map((response: any) => {
      this.bids = response;
    }));
  }

  getBidsByBidderId() {
    let userId = localStorage.getItem("token")?.split(":")[0];
    let url = `http://localhost:8080/bids/?bidderId=${userId}`;
    return this.http.get(url).pipe(map((response: any) => {
      this.bids = response;
    }));
  }

  getBidsByArtId(artId: number) {
    let userId = localStorage.getItem("token")?.split(":")[0];
    let url = `http://localhost:8080/bids/${userId}/art/${artId}`;
    return this.http.get(url).pipe(map((response: any) => {
      this.bids = response;
    }));
  }

  createBid(body: Bid) {
    let url = `http://localhost:8080/bids/`;
    return this.http.post(url, body).pipe(map((response: any) => {
      return response;
    }));
  }
}
