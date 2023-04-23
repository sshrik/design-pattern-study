import Item, { ItemAbility } from 'abstract-factory-pattern/products';

export default class Bow implements Item {
  readonly name: string;

  readonly damage: number;

  readonly defense: number;

  readonly range: number;

  constructor(itemAbility: ItemAbility) {
    const { damageBonus = 0, defenseBonus = 0, rangeBonus = 0 } = itemAbility;

    this.name = 'Bow';
    this.damage = 15 + damageBonus;
    this.defense = 1 + defenseBonus;
    this.range = 3 + rangeBonus;
  }
}
