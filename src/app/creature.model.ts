export class Creature {
  constructor(public name: string, public description: string, public hp: {[key:number]: number} = {}, public prestige: number) {};
}
