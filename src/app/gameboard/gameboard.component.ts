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
    console.log(this.localPlayers);
    console.log(this.shuffleDeck);
  }

  discard(player: Player){
    player.hand = ["cards"];
    for(let i=0; i<7; i++){
      player.hand.push(this.shuffleDeck[0]);
      this.shuffleDeck.splice(0, 1);
    }
    console.log(this.shuffleDeck);
  }

  drawToMaxHand(player: Player){
    if(player.hand.length < 8){
      for(let i=player.hand.length; i < 8; i++){
        player.hand.push(this.shuffleDeck[0]);
        this.shuffleDeck.splice(0, 1);
      }
    }
    else{
      alert("Your hand is full.");
    }
  }

  useCard(card: any, player: Player){
    //use potion card
    if(card.name == "Potion Of Healing"){
      if(player.hp == 100){
        alert("This player's hp is full.");
      }
      else
      {
        player.hp += 25;
        if(player.hp > 100){
          player.hp = 100;
        }
        player.hand.splice(player.hand.indexOf(card), 1);
      }
    }
    //use attack card
    else if(card.name == "attack 40"){
      player.hand.splice(player.hand.indexOf(card), 1);
      player.setAttackCard = card;
      console.log(player);
      console.log(player.setAttackCard);
    }
    else if(card.name == "attack 25"){
      player.hand.splice(player.hand.indexOf(card), 1);
      player.setAttackCard = card;
      console.log(player);
      console.log(player.setAttackCard);

    }
    else if(card.name == "poke with stick 0"){
      player.hand.splice(player.hand.indexOf(card), 1);
      player.setAttackCard = card;
      console.log(player);
      console.log(player.setAttackCard);
    }
  }

}
