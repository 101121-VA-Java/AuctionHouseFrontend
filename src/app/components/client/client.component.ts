import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  bidAmount= null;

  constructor() { }

  ngOnInit(): void {
  }

  bid(){
    const bidAmount = this.bidAmount;
    let data: any = {bidAmount};
    data = JSON.stringify(data);
  }
}
