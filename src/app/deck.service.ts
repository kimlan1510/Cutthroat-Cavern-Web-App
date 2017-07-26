import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { Creature } from './creature.model';

@Injectable()
export class DeckService {
  actionCard;
  itemCardInPlay;
  swapAttackCard;
  swapPlayer;
  setCards: any[]=[];
  actionsInPlay: any[] = [];
  creature: Creature;
  player: Player;
  deck: any[] = [];
  shuffleDeck: any[] = [];
  localPlayers: Player[] = [];

  constructor() { }

  //get cards from firebase
  getCards(cards: any){
    //Retrieve cards from firebase
    //attack 100
    for(let i = 1; i < 4; i++){
      this.deck.push(cards[0][0].attackCards[0]);
    }
    //attack 50
    for(let i = 1; i < 9; i++){
      this.deck.push(cards[0][0].attackCards[1]);
    }
    //attack 40
    for(let i = 1; i < 15; i++){
      this.deck.push(cards[0][0].attackCards[2]);
    }
    //attack 30
    for(let i = 1; i < 9; i++){
      this.deck.push(cards[0][0].attackCards[3]);
    }
    //attack 25
    for(let i = 1; i < 11; i++){
      this.deck.push(cards[0][0].attackCards[4]);
    }
    //attack 20
    for(let i = 1; i < 11; i++){
      this.deck.push(cards[0][0].attackCards[5]);
    }
    //attack 10
    for(let i = 1; i < 11; i++){
      this.deck.push(cards[0][0].attackCards[6]);
    }
    //attack 5
    for(let i = 1; i < 7; i++){
      this.deck.push(cards[0][0].attackCards[7]);
    }
    //poke with Stick
    for(let i = 1; i < 5; i++){
      this.deck.push(cards[0][0].attackCards[8]);
    }
    //action Cards
    for(let card of cards[0][1].actionCards){
      for(let i = 1; i < 4; i++){
        this.deck.push(card);
      }
    }
    //potion of Healing
    for(let i = 1; i < 2; i++){
      this.deck.push(cards[0][2].itemCards[0]);
    }
    //cure wounds
    for(let i = 1; i < 3; i++){
      this.deck.push(cards[0][2].itemCards[1]);
    }
    //Populate deck
    while(this.deck.length > 0){
      let i = this.deck.length;
      var randomNumber = Math.floor(Math.random() * i);
      var singleCard = this.deck[randomNumber];
      this.shuffleDeck.push(singleCard);
      this.deck.splice(this.deck.indexOf(singleCard), 1);
    }
    return this.shuffleDeck;
  }

  //set cards in play
  setCardInPlay(card: any, player: Player){
    if(this.setCards.length >= 4){
      //set potion card
      if(card.name == "Potion Of Healing"){
        this.itemCardInPlay = card;
        player.setItemCard = card;
        player.hand.splice(player.hand.indexOf(card), 1);
      }
      //set action card
      else if(card.name == "Edge Out" || card.name == "Mixed Signal" || card.name == "Not So Fast!" || card.name == "Not On My Watch!"){
        this.actionCard = card;
        // alert("Select a target.");
        player.hand.splice(player.hand.indexOf(card), 1);
        this.actionsInPlay.push(card);
        console.log(this.actionsInPlay);
      }
      //set attack card
      else if(card.name == "Attack 100"){
        this.setCards = [];
        this.actionsInPlay = [];
        player.hand.splice(player.hand.indexOf(card), 1);
        player.setAttackCard = card;
        this.setCards.push(player);
      }
      else if(card.name == "Attack 50"){
        this.setCards = [];
        this.actionsInPlay = [];
        player.hand.splice(player.hand.indexOf(card), 1);
        player.setAttackCard = card;
        this.setCards.push(player);
      }
      else if(card.name == "Attack 40"){
        this.setCards = [];
        this.actionsInPlay = [];
        player.hand.splice(player.hand.indexOf(card), 1);
        player.setAttackCard = card;
        this.setCards.push(player);
      }
      else if(card.name == "Attack 30"){
        this.setCards = [];
        this.actionsInPlay = [];
        player.hand.splice(player.hand.indexOf(card), 1);
        player.setAttackCard = card;
        this.setCards.push(player);
      }
      else if(card.name == "Attack 25"){
        this.setCards = [];
        this.actionsInPlay = [];
        player.hand.splice(player.hand.indexOf(card), 1);
        player.setAttackCard = card;
        this.setCards.push(player);
      }
      else if(card.name == "Attack 20"){
        this.setCards = [];
        this.actionsInPlay = [];
        player.hand.splice(player.hand.indexOf(card), 1);
        player.setAttackCard = card;
        this.setCards.push(player);
      }
      else if(card.name == "Attack 10"){
        this.setCards = [];
        this.actionsInPlay = [];
        player.hand.splice(player.hand.indexOf(card), 1);
        player.setAttackCard = card;
        this.setCards.push(player);
      }
      else if(card.name == "Attack 5"){
        this.setCards = [];
        this.actionsInPlay = [];
        player.hand.splice(player.hand.indexOf(card), 1);
        player.setAttackCard = card;
        this.setCards.push(player);
      }
      else if(card.name == "Poke With Stick 0"){
        this.setCards = [];
        this.actionsInPlay = [];
        player.hand.splice(player.hand.indexOf(card), 1);
        player.setAttackCard = card;
        this.setCards.push(player);
      }
    }
    else{
      //set potion card
      if(card.name == "Potion Of Healing" || card.name == "Cure Wounds"){
        this.itemCardInPlay = card;
        player.setItemCard = card;
        player.hand.splice(player.hand.indexOf(card), 1);
      }
      //set action card
      else if(card.name == "Edge Out" || card.name == "Mixed Signal" || card.name == "Not So Fast!" || card.name == "Not On My Watch!"){
        this.actionCard = card;
        // alert("Select a target.");
        player.hand.splice(player.hand.indexOf(card), 1);
        this.actionsInPlay.push(card);
        console.log(this.actionsInPlay);
      }
      //set attack card
      else if(card.name == "Attack 100"){
        player.hand.splice(player.hand.indexOf(card), 1);
        player.setAttackCard = card;
        this.setCards.push(player);
      }
      else if(card.name == "Attack 50"){
        player.hand.splice(player.hand.indexOf(card), 1);
        player.setAttackCard = card;
        this.setCards.push(player);
      }
      else if(card.name == "Attack 40"){
        player.hand.splice(player.hand.indexOf(card), 1);
        player.setAttackCard = card;
        this.setCards.push(player);
      }
      else if(card.name == "Attack 30"){
        player.hand.splice(player.hand.indexOf(card), 1);
        player.setAttackCard = card;
        this.setCards.push(player);
      }
      else if(card.name == "Attack 25"){
        player.hand.splice(player.hand.indexOf(card), 1);
        player.setAttackCard = card;
        this.setCards.push(player);
      }
      else if(card.name == "Attack 20"){
        player.hand.splice(player.hand.indexOf(card), 1);
        player.setAttackCard = card;
        this.setCards.push(player);
      }
      else if(card.name == "Attack 10"){
        player.hand.splice(player.hand.indexOf(card), 1);
        player.setAttackCard = card;
        this.setCards.push(player);
      }
      else if(card.name == "Attack 5"){
        player.hand.splice(player.hand.indexOf(card), 1);
        player.setAttackCard = card;
        this.setCards.push(player);
      }
      else if(card.name == "Poke With Stick 0"){
        player.hand.splice(player.hand.indexOf(card), 1);
        player.setAttackCard = card;
        this.setCards.push(player);
      }
    }
  }

  //get set cards
  getSetCards(){
    return this.setCards;

  }

  //resetSetCards
  resetSetCards(setCards){
    return setCards;
  }

  //DealCards
  dealCards(localPlayers){
    for(let player of localPlayers){
      for(let i=0; i<7; i++){
        player.hand.push(this.shuffleDeck[0]);
        this.shuffleDeck.splice(0, 1);
      }
    }
    return this.shuffleDeck;
  }

  discard(player){
    player.hand = ["cards"];
    for(let i=0; i<7; i++){
      player.hand.push(this.shuffleDeck[0]);
      this.shuffleDeck.splice(0, 1);
    }
    return this.shuffleDeck;
  }

  drawToMaxHand(player){
    if(player.hand.length < 8){
      for(let i=player.hand.length; i < 8; i++){
        player.hand.push(this.shuffleDeck[0]);
        this.shuffleDeck.splice(0, 1);
      }
    }
    else{
      alert("Your hand is full.");
    }
    return this.shuffleDeck;
  }

  //use Action card
  useActionCards(player: Player, attackingPlayer: Player){
    let confirmation = confirm("Do you allow this action to happen?");
    if(confirmation == true){
      this.actionsInPlay.reverse();
      player.setActionCard = this.actionCard;
      console.log("Do action in the array of action cards");
      for(let card of this.actionsInPlay){
        console.log(this.actionsInPlay);
        if(card.name == "Mixed Signal"){
          this.mixedSignal(player, attackingPlayer);
        }
        else if(card.name == "Edge Out")
        {
          this.edgeOut(player);
        }
      }
    }
    else
    {
      player.setActionCard = this.actionCard;
      alert("Pick an action card");
    }
    // player.setActionCard = this.actionCard;
    // if(player.setActionCard.name == "Mixed Signal"){
    //   //swap player's set attack card
    //   this.swapAttackCard = attackingPlayer.setAttackCard;
    //   attackingPlayer.setAttackCard = player.setAttackCard;
    //   player.setAttackCard = this.swapAttackCard;
    //   //swap player's positions in setCards array
    //   let i = this.setCards.indexOf(attackingPlayer);
    //   let ii = this.setCards.indexOf(player);
    //   this.setCards[i] = player;
    //   this.setCards[ii] = attackingPlayer;
    //
    // }
    // else if(player.setActionCard.name == "Edge Out"){      player.setAttackCard = null;
    //   this.setCards.splice(this.setCards.indexOf(player), 1);
    // }

  }

  mixedSignal(player, attackingPlayer){
    //swap player's set attack card
    this.swapAttackCard = attackingPlayer.setAttackCard;
    attackingPlayer.setAttackCard = player.setAttackCard;
    player.setAttackCard = this.swapAttackCard;
    //swap player's positions in setCards array
    let i = this.setCards.indexOf(attackingPlayer);
    let ii = this.setCards.indexOf(player);
    this.setCards[i] = player;
    this.setCards[ii] = attackingPlayer;
  }

  edgeOut(player){
    player.setAttackCard = null;
    this.setCards.splice(this.setCards.indexOf(player), 1);
  }

  //use Potion card
  usePotion(player: Player, selectedPlayer: Player) {
    if(selectedPlayer.setItemCard.name == "Potion Of Healing"){
      if(player.hp >= 100) {
        alert("This character's HP is full!");
      }
      else if (player.hp <= 0) {
        alert("This character is super dead!");
      }
      else {
        player.hp += 25;
        if(player != selectedPlayer){
          selectedPlayer.prestige += 3;
        }
        if(player.hp > 100) {
          player.hp = 100;
        }
        selectedPlayer.setItemCard = null;
      }
    }
    else if(selectedPlayer.setItemCard.name == "Cure Wounds"){
      if(player.hp >= 100) {
        alert("This character's HP is full!");
      }
      else if (player.hp <= 0) {
        alert("This character is super dead!");
      }
      else {
        player.hp += 15;
        if(player != selectedPlayer){
          selectedPlayer.prestige += 2;
        }
        if(player.hp > 100) {
          player.hp = 100;
        }
        selectedPlayer.setItemCard = null;
      }
    }
  }
}
