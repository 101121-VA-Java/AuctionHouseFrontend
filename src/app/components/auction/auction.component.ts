import { Component, Input, OnInit } from '@angular/core';
import { Art } from 'src/app/model/Art';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})

export class AuctionComponent implements OnInit {
  @Input() arts: Art[];
  
  constructor() { 
    this.arts = [];
  }

  ngOnInit(): void {
  }
}
