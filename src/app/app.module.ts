import { AuctionService } from './services/auction.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuctionComponent } from './components/auction/auction.component';
import { HeaderComponent } from './components/header/header.component';
import { AuctionhomeComponent } from './components/auctionhome/auctionhome.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AuctionComponent,
    HeaderComponent,
    AuctionhomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuctionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
