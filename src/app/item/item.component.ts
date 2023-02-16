import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { StarWarService } from '../star-war.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() character:any;
  // @Output() sideAssigned = new EventEmitter<{name: string, side: string}>();
  swService: StarWarService;
  constructor(
    swService: StarWarService
  ) { 
    this.swService = swService;
  }

  ngOnInit(): void {
  }

  onAssign(side: string){
    // this.character.side = side;
    // this.sideAssigned.emit({name: this.character.name, side: side});
    // const swService = new StarWarService();
    this.swService.onSideChosen({name: this.character.name, side: side});
    
  }

}
