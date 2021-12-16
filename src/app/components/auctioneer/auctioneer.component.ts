import { ArtService } from './../../services/art.service';
import { Component, OnInit } from '@angular/core';
import { HttpStatusCode } from '@angular/common/http';
import { from } from 'rxjs';

@Component({
  selector: 'app-auctioneer',
  templateUrl: './auctioneer.component.html',
  styleUrls: ['./auctioneer.component.css']
})
export class AuctioneerComponent implements OnInit {
  ids: any[] = [];
  currentArtPiece: any = {};

  constructor(private artService: ArtService) { }

  ngOnInit(): void {
    this.artService.getArtIdsWithImages().subscribe((res: any) => {
      this.getNewImage();
    });
  }

  createAuction() {
    let {
      artistDisplayName,
      medium,
      primaryImageSmall,
      title
    } = this.currentArtPiece;

    let data = {
      artistname: artistDisplayName,
      artpiecename: title,
      bidderid: 1,
      highestbid: 0,
      ownerid: 1,
      url: primaryImageSmall
    };

    this.artService.listArtForAuction(data).subscribe((res: any) => {
      this.currentArtPiece = res;
    });

    this.getNewImage();
  }

  getNewImage() {
    let ids = this.artService.ids;
    let randomArtPieceId = ids[Math.floor(Math.random() * ids.length)];
    this.artService.getArtById(randomArtPieceId).subscribe(res => {
      console.log(res);
      this.currentArtPiece = res;
    });
  }
}
