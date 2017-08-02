# _Cutthroat Caverns_

#### _A group project for JavaScript course at Epicodus, July 19th 2017_

#### By _**Julian Flood, Corey Redding, Jordan Loop, Kimlan Nguyen**_

## Description

This game is a recreation of a board game called Cutthroat Caverns. Four players are fighting their way out of a dungeon, and must rely on each other to survive a series of creatures' attacks, while competing against each other to collect prestige points. The player that survives and has the most prestige points, wins.

https://github.com/kimlan1510/Cutthroat-Cavern-Web-App


## Images

Sample images can be found in src/app/img




## Specifications

+ Player selection page.
+ Players must be able to see game board.
+ Players must be able to see deck and hand dealt.
+ Players must be able to take turns.
+ Players will play cards from their hand.
+ Players must be able to respond to specific cards with their own.
+ Creatures must be able to deal damage to players.
+ Life points must be affected by played cards.
+ Final outcome(win or lose) must be displayed.


## Future features

+ More creatures to battle.
+ More cards of all types with added features.
+ Animations for aesthetics.
+ Sound Effects on actions.
+ More elaboration on layout styling.
+ Health meters implemented.
+ Leaderboard.

## Setup/Installation Requirements

+ Use Terminal (on Mac) or Windows PowerShell (on Windows), enter the following to clone the repository:
<br>
<code> git clone </code> https://github.com/kimlan1510/Cutthroat-Cavern-Web-App

+ Make account with firebase to obtain API credentials.
+ Import deck.json.
+ Create a file called firebase-api-keys.ts in src/app.
+ Insert your personal Firebase API credentials in firebase-api-keys.ts
<pre>
export const masterFirebaseConfig= {
  apiKey: xxx,
  authDomain: xxx,
  databaseURL: xxx,
  projectId: xxx,
  storageBucket: xxx,
  messagingSenderId: xxx
}
</pre>
+ Run npm install
+ Run bower install
+ Run ng serve
+ In a web browser, navigate to localhost:4200.



## Known Bugs

_The attack feature only works correctly of there are four attack cards in play._
_Clicking on the character's profile picture alerts player to select an counter action card even though the players have not selected an action card._



## Support and contact details

_Email us at

julianflood@gmail.com,
coreysnightout@gmail.com,
jordloop@gmail.com,
kimlan1510@gmail.com

if you run into any issues_

## Technologies Used

_HTML, CSS, TypeScript, Angular 4, Angular 2 CLI, Firebase_

# AngularProject

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.


### License

*MIT*

Copyright (c) 2017 **_Julian Flood, Corey Redding, Kimlan Nguyen, Jordan Loop_**
