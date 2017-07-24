import { Character } from './character.model';

export class Player {
  public turn: boolean = false;
  public hand: any[] = ["cards"];
  public setAttackCard: any;
  constructor(public name: string, public prestige: number = 0, public hp: number = 100, public initiative: number = 0, public character: Character){}
}
