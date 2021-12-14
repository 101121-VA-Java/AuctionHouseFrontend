import { Component, Input, OnInit } from '@angular/core';
import { Auction } from 'src/app/model/auction';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() auction?: Auction;
}