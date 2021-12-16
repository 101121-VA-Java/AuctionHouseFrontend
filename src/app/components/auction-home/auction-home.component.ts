import { ArtService } from './../../services/art.service';
import { Component, Input, OnInit } from '@angular/core';
import { Auction } from 'src/app/model/auction';

@Component({
  selector: 'app-auction-home',
  templateUrl: './auction-home.component.html',
  styleUrls: ['./auction-home.component.css']
})
export class AuctionHomeComponent implements OnInit {
  public auction: any = {
    objectID: 2,
    artistDisplayName: 3,
    objectName: 4,
    primaryImage: ''
  }
  constructor(private artsService: ArtService) { }

    ngOnInit(): void {
    }

    // auction?: Auction

  getAuction(id: string){
    // let arts = this.artsByType.getArtsByType('gun');
    // for(let art in arts){
    //   id = art;
    // }
    // this.fetchArtsService.getArtById(id).subscribe(
    //   response => {
    //     this.auction = response;
    //   }
    // )
    console.log('auctionhomecomponent getAuction');

  };
}
