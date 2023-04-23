export default interface Items {
  name: string;
  damage: number;
  defense: number;
  range: number;
}

export interface ItemAbility {
  damageBonus?: number;
  defenseBonus?: number;
  rangeBonus?: number;
}
