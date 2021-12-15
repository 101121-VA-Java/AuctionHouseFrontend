import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ClientComponent } from './components/client/client.component';
import { RouterModule } from '@angular/router';
import { LogoutComponent } from './components/logout/logout.component';
import { AuctionComponent } from './components/auction/auction.component';
import { AuctionHomeComponent } from './components/auction-home/auction-home.component';
import { ArtService } from './services/art.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientComponent,
    LogoutComponent,
    AuctionComponent,
    AuctionHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ArtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
