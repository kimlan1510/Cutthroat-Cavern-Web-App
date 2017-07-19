export class Player {
  public turn: boolean = false;
  constructor(public name: string, public prestige: number, public hand: any[], public hp: number, public initiative: number ){}
}
