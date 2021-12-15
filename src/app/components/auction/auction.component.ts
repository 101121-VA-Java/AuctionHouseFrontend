import { ArtService } from './../../services/art.service';
import { Component, Input, OnInit } from '@angular/core';
import { Auction } from 'src/app/model/auction';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent implements OnInit {
  public id: string = '';
  public auction: any = {
    objectID: 2,
    artistDisplayName: 3,
    objectName: 4,
    primaryImage: 5
  }
  constructor(private artService: ArtService) { }

    ngOnInit(): void {
    }
      
    // @Input() auction?: Auction; 
    
    getAuction(){
      // this.artService.getArtById(id: string)
      console.log("Auction component getAuction");
    }
}
