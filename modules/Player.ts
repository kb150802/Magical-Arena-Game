export class Player {
    id: number;
    name: string;
    health: number;
    attack: number;
    strength: number;

    constructor(id: number, name: string, health: number, strength: number, attack: number) {
        this.id = id;
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.attack = attack;
      }
}