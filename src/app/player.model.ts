export class Player {
  public turn: boolean = false;
  constructor(public name: string, public prestige: number = 0, public hand: any[] = null, public hp: number = 100, public initiative: number = null, public character: any[]){}
}
