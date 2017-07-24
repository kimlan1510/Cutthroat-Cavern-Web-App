import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from "firebase";
//import model
import { Player } from '../player.model';
import { Character } from '../character.model';
//import services
import { PlayerService } from '../player.service';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss'],
  providers: [ PlayerService, FirebaseService ]
})

export class GameboardComponent implements OnInit {
  players;
  cards;
  deck: any[] = [];
  shuffleDeck: any[] = [];
  localPlayers: Player[] = [];

  constructor(private playerService: PlayerService, private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.playerService.getPlayers().subscribe(response => {
      this.players = response;
      for(let i = this.players.length - 1; i > this.players.length - 5; i-- ){
        this.localPlayers.push(this.players[i]);
      }
      console.log(this.localPlayers);
    });

    this.firebaseService.getCards().subscribe(response => {
      this.cards = response;
      //Create a deck of cards from card types in database
      for(let card of this.cards[0][0].attackCards){
        for(let i = 1; i < 26; i++){
          this.deck.push(card);
        }
      }

      for(let card of this.cards[0][1].actionCards){
        for(let i = 1; i < 8; i++){
          this.deck.push(card);
        }
      }

      for(let card of this.cards[0][2].itemCards){
        for(let i = 1; i < 8; i++){
          this.deck.push(card);
        }
      }

      //create a new shuffled deck from the deck of cards
      while(this.deck.length > 0){
        let i = this.deck.length;
        var randomNumber = Math.floor(Math.random() * i);
        var singleCard = this.deck[randomNumber];
        this.shuffleDeck.push(singleCard);
        this.deck.splice(this.deck.indexOf(singleCard), 1);
      }
    });

  }

  dealCards(){
    for(let player of this.localPlayers){
      for(let i=0; i<7; i++){
        player.hand.push(this.shuffleDeck[0]);
        this.shuffleDeck.splice(0, 1);
      }
    }

    console.log(this.shuffleDeck);
  }

}
