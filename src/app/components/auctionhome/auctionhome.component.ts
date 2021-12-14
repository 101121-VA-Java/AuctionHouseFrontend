import { Component, Input, OnInit } from '@angular/core';
import { Auction } from 'src/app/model/auction';
import { AuctionService } from 'src/app/services/auction.service';

@Component({
  selector: 'app-auctionhome',
  templateUrl: './auctionhome.component.html',
  styleUrls: ['./auctionhome.component.css']
})
export class AuctionhomeComponent implements OnInit {

  constructor(private auctionService: AuctionService) { }

  ngOnInit(): void {
  }
  auction?: Auction;

  getAuction(a_id: any){
    this.auctionService.getArtById(a_id).subscribe(
      response => {
        this.auction = response;
      }
    );
  }


}
