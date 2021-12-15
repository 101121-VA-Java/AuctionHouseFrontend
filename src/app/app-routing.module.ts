import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuctioneerComponent } from './components/auctioneer/auctioneer.component';
import { ClientComponent } from './components/client/client.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [{
  path: '',
    component: LoginComponent
},{
  path:'client',
    component: ClientComponent
},{
  path:'auctioneer',
    component: AuctioneerComponent
},{
  path:'client/collections',
    component: CollectionsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
