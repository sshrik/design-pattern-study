import Item, { ItemAbility } from 'abstract-factory-pattern/products';

export default class Sword implements Item {
  readonly name: string;

  readonly damage: number;

  readonly defense: number;

  readonly range: number;

  constructor(itemAbility: ItemAbility) {
    const { damageBonus = 0, defenseBonus = 0, rangeBonus = 0 } = itemAbility;

    this.name = 'Sword';
    this.damage = 10 + damageBonus;
    this.defense = 5 + defenseBonus;
    this.range = 1 + rangeBonus;
  }
}
