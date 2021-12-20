import { Component, OnInit } from '@angular/core';
import { Art } from 'src/app/model/Art';
import { ArtService } from 'src/app/services/art.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {
  arts: any = [];
  constructor(private Auth: AuthService, private Arts: ArtService) { }

   
  // 1. request art pieces by owner id from our backend
    //      backend returns {... art1, art2, etc}
    // 2. ngFor to show the art pieces on the screen


  ngOnInit(): void {
    this.populateArt();
  }

  populateArt(){
    // let userId = Number.parseInt(this.Auth.token.split(":")[0]);
    this.Arts.getLoggedInUserArt().subscribe((res: any) => {
      this.arts = this.Arts.arts;
      console.log(this.arts);
    });
    // const result = this.arts.filter((art: 
    //   Art) => art.ownerid  === userId);

    // for(const i in this.arts){
    //   // if(i.owerId == userId){

    //   // }
    // }
  }


}
