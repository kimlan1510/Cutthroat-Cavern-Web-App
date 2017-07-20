import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";
import { FirebaseService } from '../firebase.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Player } from '../player.model';
import { Character } from '../character.model';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  providers: [ FirebaseService ]
})
export class LandingPageComponent implements OnInit {
  characters;
  chosenCharacter: Character;
  players: Player[] = null;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getCharacters().subscribe(response =>{
      this.characters = response[0];
      // console.log(this.players);
    })
  }

  selectThisCharacter(selectedCharacter){
    this.chosenCharacter = selectedCharacter;
    this.characters.splice(this.characters.indexOf(selectedCharacter), 1);

  }

  createPlayer(name: string){
    var prestige: number = 0;
    var hand: any[] = null;
    var hp: number = 100;
    var initiative: number = null;
    if(this.chosenCharacter == null){
      alert("Please select a character.");
    }
    else
    {
      var newPlayer: Player = new Player(name, prestige, hand, hp, initiative, this.chosenCharacter);
      console.log(newPlayer);
      console.log(newPlayer.name);
      console.log(newPlayer.character);
      console.log(this.chosenCharacter);
      this.players.push(newPlayer);
      console.log(this.players);
    }
  }

}
