import Items, { ItemAbility } from 'abstract-factory-pattern/products';

export default class Shield implements Items {
  readonly name: string;

  readonly damage: number;

  readonly defense: number;

  readonly range: number;

  constructor(itemAbility: ItemAbility) {
    const { damageBonus = 0, defenseBonus = 0, rangeBonus = 0 } = itemAbility;

    this.name = 'Shield';
    this.damage = 1 + damageBonus;
    this.defense = 10 + defenseBonus;
    this.range = 1 + rangeBonus;
  }
}
