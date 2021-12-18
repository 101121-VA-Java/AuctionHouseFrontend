import { ArtService } from './../../services/art.service';
import { Component, OnInit } from '@angular/core';
import { Auction } from 'src/app/model/Auction';
import { AuctionService } from 'src/app/services/auction.service';
import { Art } from 'src/app/model/Art';

@Component({
  selector: 'app-auctioneer',
  templateUrl: './auctioneer.component.html',
  styleUrls: ['./auctioneer.component.css']
})
export class AuctioneerComponent implements OnInit {
  ids: any[] = [];
  artsForSale: any = [];
  medium: string = "";
  auctions: Auction[] = [];
  show = true;

  constructor(private artService: ArtService, private auctionService: AuctionService) { }

  ngOnInit(): void {
    this.ids = this.auctionService.ids;
    this.auctions = this.auctionService.auctions;
  }

  createAuction() {
    let test = this.auctionService.getRandomArtFromMetroAPI();
    if(test) test.subscribe((res: any) => {
      let cap = res;
      let artistDisplayName, medium, primaryImageSmall, title;
      if (cap.artistDisplayName) artistDisplayName = cap.artistDisplayName;
      if (cap.medium) medium = cap.medium;
      if (cap.primaryImageSmall) primaryImageSmall = cap.primaryImageSmall;
      if (cap.title) title = cap.title;
      if (cap.medium) this.medium = medium;
      let data: Art = {
        artist: artistDisplayName || null,
        name: title || null,
        ownerid: 1,
        url: primaryImageSmall
      };
      this.artService.listArtForAuction(data).subscribe((res: any) => {
        this.auctions = this.auctionService.getAuctions();
      });
    })
  }
}
