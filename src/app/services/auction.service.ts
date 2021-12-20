import { Injectable } from '@angular/core';
import { Art } from '../model/Art';
import { Auction } from '../model/Auction';
import { Bid } from '../model/Bid';
import { ArtService } from './art.service';
import { BidService } from './bid.service';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {
  ids: number[] = [];
  auctions: Auction[] = [];
  artFromMetAPI: any = {};

  constructor(private as: ArtService, private bs: BidService) {
    this.getAuctions();
    this.getArtIds();
  }

  getAuctions() {
    let arts: Art[], bids: Bid[], highestBid: number;
    this.as.getSavedArt().subscribe((res1: any) => {
      arts = this.as.arts.filter((art: { ownerid: number; }) => art.ownerid === 1);
      this.bs.getAllBids().subscribe((res2: any) => {
        bids = this.bs.bids;
        let result: Auction[] = [];
        for (const art of arts) {
          let bidsOfArt: Bid[] = bids.filter(bid => bid.artid === art.id);
          highestBid = bidsOfArt.length <= 0 ? 0 : this.getHighestBid(bidsOfArt);
          let auction: Auction = {art, bids: bidsOfArt, highestBid};
          result.push(auction);
        }
        this.auctions = result;
      })
    })
    console.log(this.auctions);
    return this.auctions;
  }

  getArtIds() {
    this.as.getArtIdsWithImages().subscribe((res: any) => {
      this.ids = this.as.ids;
    });
  }

  getRandomArtFromMetroAPI(){
    let ids = this.ids;
    let randomArtPieceId: number;
    if(ids.length <= 0) return;
    randomArtPieceId = ids[Math.floor(Math.random() * ids.length)];
    return this.as.getArtById(randomArtPieceId);
  }

  getHighestBid(arrayOfBids: Bid[]) {
    return arrayOfBids.reduce((max, current) => {
      if(current.amount > max) max = current.amount;
      return max;
    }, 0)
  }
}
