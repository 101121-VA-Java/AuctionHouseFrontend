import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Auction } from 'src/app/model/Auction';
import { Bid } from 'src/app/model/Bid';
import { AuctionService } from 'src/app/services/auction.service';
import { BidService } from 'src/app/services/bid.service';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})

export class AuctionComponent implements OnInit {
  @Input() auction!: Auction;
  @Output() newBidEvent = new EventEmitter();
  unsavedBid: number = 0;
  constructor(private bidService: BidService, private auctionService: AuctionService) { }

  ngOnInit(): void {
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
      this.newBidEvent.emit(res);
    })
  }

  getAuction() {
    console.log(this.auction.art.id);
  }
}
