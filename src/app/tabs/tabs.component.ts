import { Component, OnInit } from '@angular/core';
// import { StarWarService } from '../star-war.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  // characters:  any[] = [];
  // chosenList = 'all';
  // swService: StarWarService;

  constructor(
    // swService: StarWarService
  ) { 
    // this.swService = swService;
  }

  ngOnInit(): void {
  }
  // getCharacters(){
  //   // const swService = new StarWarService();
  //   this.characters = this.swService.getCharacters(this.chosenList);
  //   return this.characters;
  // }

  // onChose(side: string){
  //   this.chosenList = side;
  // }


}
