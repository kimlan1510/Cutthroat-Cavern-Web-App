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
  splash: boolean = true;
  characterSelect: boolean = null;
  players: FirebaseListObservable<any[]>;
  localPlayers: Player[] = [];


  constructor(private firebaseService: FirebaseService, private playerService: PlayerService) { }

  ngOnInit() {
    this.firebaseService.getCharacters().subscribe(response =>{
      this.characters = response[0];
    })
  }

  splashClicked() {
    this.splash = null;
    this.characterSelect = true;
  }

  selectThisCharacter(selectedCharacter){
    this.chosenCharacter = selectedCharacter;
  }

  createPlayer(name: string){
    this.characters.splice(this.characters.indexOf(this.chosenCharacter), 1);
    this.playerService.createPlayer(name, this.chosenCharacter);
  }

  getLocalPlayers(){
    this.localPlayers = this.playerService.getLocalPlayers();
  }




}
