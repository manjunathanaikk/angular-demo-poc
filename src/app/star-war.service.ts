import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { LogService } from "./log.service";
import { HttpClient } from '@angular/common/http'
@Injectable()
export class StarWarService {
  private characters = [
    { name: 'Manju', side: '' },
    { name: 'Vani', side: '' },
  ];
  private logService: LogService;
  charactersChanged = new Subject<void>();
  http: HttpClient;
  constructor(
    logservice: LogService,
    http: HttpClient
    ){
    this.logService = logservice;
    this.http = http;
  }
  fetchCharacters(){
    this.http.get('https://swapi.dev/api/people/').subscribe(
        (res: any)=>{
            const extractedData = res.results;
            const chars =  extractedData.map((char: any) =>{
                return {name: char.name, side: ''}
            })
            console.log(chars);
            this.characters = chars;
            this.charactersChanged.next();
            // return chars;
        }
    );
  }
  getCharacters(chosenList: any) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === chosenList;
    });
  }
  onSideChosen(charInfo: any) {
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    });
    this.characters[pos].side = charInfo.side;
    this.charactersChanged.next();
    this.logService.writeLog('Changed side of ' + charInfo.name + ', new side: '+ charInfo.side);
  }
  addCharacter(name: string, side: string){
    const pos = this.characters.findIndex((char) => {
        return char.name === name;
      });
      if(pos !== -1){
        return;
      }
    let newChar = {name: name, side: side};
    this.characters.push(newChar);
 }
}
