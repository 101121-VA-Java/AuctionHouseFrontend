import { Component, OnInit } from '@angular/core';
import { Auction } from 'src/app/model/auction';
import { AuctionService } from 'src/app/services/auction.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
