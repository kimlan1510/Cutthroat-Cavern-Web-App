import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";
import { FirebaseService } from '../firebase.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Player } from '../player.model';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  providers: [ FirebaseService ]
})
export class LandingPageComponent implements OnInit {
  characters;
  players: Player[];

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getCharacters().subscribe(response =>{
      this.characters = response[0];
    })
  }
  // createPlayer(name: string, this.character){
  //   var newPlayer: Player = new Player(name, prestige: number = 0, hand: any[] = null, hp: number = 100, initiative: number = null, this.character);
  //   this.players.push(newPlayer);
  // }

  selectThisCharacter(selectedCharacter){
    this.characters.splice(this.characters.indexOf(selectedCharacter), 1);
    return selectedCharacter;
  }
}
