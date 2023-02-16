import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarService } from '../star-war.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  // @Input() characters: any;
  characters: any = [];
  // @Output() sideAssigned = new EventEmitter<{name: string, side: string}>();
  activatedRoute : ActivatedRoute; 
  swService: StarWarService;
  loadedSide = 'all';
  subscription : any;

  constructor(activatedRoute : ActivatedRoute, swService: StarWarService) { 
    this.activatedRoute = activatedRoute;
    this.swService = swService
  }

 

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) =>{
        console.log(params['side'])
        this.characters = this.swService.getCharacters(params['side']);
        this.loadedSide =  params['side'];
    });
    this.subscription = this.swService.charactersChanged.subscribe(
      () =>{
        this.characters = this.swService.getCharacters(this.loadedSide);
      }
      );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  // onSideAssigned(charInfo: any){
  //   this.sideAssigned.emit(charInfo);
  // }

}
