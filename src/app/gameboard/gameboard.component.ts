import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from "firebase";
//import model
import { Player } from '../player.model';
import { Character } from '../character.model';
import { Creature } from '../creature.model';
//import services
import { PlayerService } from '../player.service';
import { FirebaseService } from '../firebase.service';
import { BeginPhaseService } from '../begin-phase.service';
import { DeckService } from '../deck.service';
import { CreatureListService} from '../creature-list.service';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss'],
  providers: [ PlayerService, FirebaseService, BeginPhaseService, DeckService, CreatureListService ]
})

export class GameboardComponent implements OnInit {
  players;
  cards;
  actionCard;
  standbyItemCards;
  encounter;
  description: boolean = true;
  setCards: any[] =[];
  selectedPlayer: Player;
  attackingPlayer: Player;
  deck: any[] = [];
  shuffleDeck: any[] = [];
  localPlayers: Player[] = [];
  encounterDeck: Creature[] = [];

  constructor(private playerService: PlayerService, private firebaseService: FirebaseService, private beginPhaseService: BeginPhaseService, private deckService: DeckService, private creatureListService: CreatureListService) { }

  ngOnInit() {
    this.playerService.getPlayers().subscribe(response => {
      this.players = response;
      for(let i = this.players.length - 1; i > this.players.length - 5; i-- ){
        this.localPlayers.push(this.players[i]);
      }
    });

    this.firebaseService.getCreatures().subscribe(response => {
      this.encounterDeck.push(response[0][0]);
      this.encounterDeck.push(response[0][2]);
      //show current creature on html
      for(let i=1; i<this.encounterDeck.length; i++){
        this.encounter = this.encounterDeck[0];
        if(this.encounterDeck[i].hp[1] > 0 && this.encounterDeck[i-1].hp[1] <=0){
          this.encounter = this.encounterDeck[i];
        }
      }
    })

    this.firebaseService.getCards().subscribe(response => {
      this.cards = response;
      //Retrieve cards from firebase
      this.shuffleDeck = this.deckService.getCards(this.cards);
      //getInitiative, drawEncounter
      this.beginPhaseService.getInitiative(this.localPlayers);
    });
  }

  dealCards(){
    this.shuffleDeck = this.deckService.dealCards(this.localPlayers);
   }

  discard(player: Player){
    this.shuffleDeck = this.deckService.discard(player);
  }

  drawToMaxHand(player: Player){
    this.shuffleDeck = this.deckService.drawToMaxHand(player);
  }

  showDescription(){
    console.log("asfdas");
    this.description = false;
  }

  //Set card in play
  useCard(card: any, player: Player){
    this.attackingPlayer = player;
    this.deckService.setCardInPlay(card, player);
  }

  //Use potion
  selectThisPotion(player: Player){
    this.selectedPlayer = player;
  }

  usePotion(player: Player){
    this.deckService.usePotion(player, this.selectedPlayer);
  }

  //use action card
  setActionCard(targetedPlayer: Player){

    this.deckService.useActionCards(targetedPlayer, this.attackingPlayer);
  }

  //Creature's turn
  play(){
    this.setCards = this.deckService.getSetCards();
    this.creatureListService.killCreatures(this.setCards, this.encounterDeck, this.localPlayers);
    for(let player of this.localPlayers){
      player.setAttackCard = null;
      player.setActionCard = null;
      player.hand.push(this.shuffleDeck[0]);
      this.shuffleDeck.splice(0, 1);
    }
  }
}
