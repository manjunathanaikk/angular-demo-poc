import { Component, OnInit } from '@angular/core';
import { StarWarService } from './star-war.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private swService: StarWarService){

  }

  ngOnInit(): void {
    this.swService.fetchCharacters();
  }

}
