import { ArtService } from './../../services/art.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auctioneer',
  templateUrl: './auctioneer.component.html',
  styleUrls: ['./auctioneer.component.css']
})
export class AuctioneerComponent implements OnInit {
  public auction: any = {
    objectID: 2,
    artistDisplayName: 3,
    objectName: 4,
    primaryImage: 5
  }
  constructor(private as: ArtService) { }

  ngOnInit(): void {
  }

  createAuction() {

    console.log('create auction')
    this.as.createAuction();
  }
}
