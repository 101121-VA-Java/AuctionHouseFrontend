import { Component, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { Art } from 'src/app/model/Art';
import { Auction } from 'src/app/model/Auction';
import { Bid } from 'src/app/model/Bid';
import { ArtService } from 'src/app/services/art.service';
import { AuctionService } from 'src/app/services/auction.service';
import { BidService } from 'src/app/services/bid.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  auctions: Auction[] = [];
  unsavedBid: number = 0;
  constructor(private auctionService: AuctionService, private bidService: BidService) { }

  ngOnInit(): void {
    this.auctions = this.auctionService.getAuctions();
  }

  placeBid(artId: number) {
    let token = localStorage.getItem("token");
    if(!token) return;
    let userId = Number.parseInt(token.split(":")[0]);

    let 
      amount: number = this.unsavedBid, 
      artid: number = artId, 
      bidderid: number = userId

    let body: Bid = {
      amount, artid, bidderid
    };

    this.bidService.createBid(body).subscribe((res: any) => {
      this.auctions = this.auctionService.getAuctions();
    })
  }
}
