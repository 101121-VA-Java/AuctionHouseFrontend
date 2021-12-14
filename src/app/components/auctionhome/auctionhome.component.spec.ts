import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionhomeComponent } from './auctionhome.component';

describe('AuctionhomeComponent', () => {
  let component: AuctionhomeComponent;
  let fixture: ComponentFixture<AuctionhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
