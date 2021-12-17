import { ArtService } from './../../services/art.service';
import { Component, OnInit } from '@angular/core';
import { HttpStatusCode } from '@angular/common/http';

@Component({
  selector: 'app-auctioneer',
  templateUrl: './auctioneer.component.html',
  styleUrls: ['./auctioneer.component.css']
})
export class AuctioneerComponent implements OnInit {
  ids: any[] = [];
  currentArtPiece: any = {};
  artsForSale: any = [];
  medium: string = "";

  constructor(private artService: ArtService) { }

  ngOnInit(): void {
    this.artService.getArtIdsWithImages().subscribe((res: any) => {
      this.getNewImage();
    });
    this.artService.getSavedArt().subscribe((res: any) => {
      this.artsForSale = this.artService.arts;
    })
  }

  createAuction() {
    let cap = this.currentArtPiece;
    let artistDisplayName, medium, primaryImageSmall, title;
    if(cap.artistDisplayName) artistDisplayName = cap.artistDisplayName;
    if(cap.medium) medium = cap.medium;
    if(cap.primaryImageSmall) primaryImageSmall = cap.primaryImageSmall;
    if(cap.title) title = cap.title;

    this.medium = medium;

    let data = {
      artist: artistDisplayName,
      name: title,
      ownerid: 1,
      url: primaryImageSmall
    };

    this.artService.listArtForAuction(data).subscribe((res: any) => {
      this.currentArtPiece = res;
      this.artService.getSavedArt().subscribe((res: any) => {
        this.artsForSale = this.artService.arts;
      })
    });

    this.getNewImage();
    
  }

  getNewImage() {
    let ids = this.artService.ids;
    let randomArtPieceId = ids[Math.floor(Math.random() * ids.length)];
    this.artService.getArtById(randomArtPieceId).subscribe(res => {
      this.currentArtPiece = res;
    });
  }
}
