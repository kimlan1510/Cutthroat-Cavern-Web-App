import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";
import { FirebaseListObservable } from 'angularfire2/database';
import { Player } from '../player.model';
import { Character } from '../character.model';
//import services
import { FirebaseService } from '../firebase.service';
import { PlayerService } from '../player.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  providers: [ FirebaseService, PlayerService ]
})
export class LandingPageComponent implements OnInit {
  characters;
  chosenCharacter: Character;
  players: Player[] = [];

  constructor(private firebaseService: FirebaseService, private playerService: PlayerService) { }

  ngOnInit() {
    this.firebaseService.getCharacters().subscribe(response =>{
      this.characters = response[0];
    })
  }

  selectThisCharacter(selectedCharacter){
    this.chosenCharacter = selectedCharacter;
    this.characters.splice(this.characters.indexOf(selectedCharacter), 1);

  }

  createPlayer(name: string){
    this.players = this.playerService.createPlayer(name, this.chosenCharacter);
    console.log(this.players);
  }

}
