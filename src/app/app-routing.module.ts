import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuctionComponent } from './components/auction/auction.component'; 
import { AuctionhomeComponent } from './components/auctionhome/auctionhome.component'; 

const routes: Routes = [{
  path: '',
  component: AuctionComponent
}, {
  path: 'auction',
  component: AuctionhomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
