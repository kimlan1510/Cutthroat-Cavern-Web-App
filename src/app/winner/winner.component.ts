import { Component, OnInit } from '@angular/core';
import { GameboardComponent } from '../gameboard/gameboard.component';
import { PlayerService } from '../player.service';
import { Player } from '../player.model';


@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.scss'],
  providers: [ PlayerService ]
})
export class WinnerComponent implements OnInit {

  localPlayers: Player[] = [];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

}
