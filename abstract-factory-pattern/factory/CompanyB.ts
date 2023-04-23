import CompanyFactory from 'abstract-factory-pattern/factory';
import Item from 'abstract-factory-pattern/products';
import Bow from 'abstract-factory-pattern/products/Bow';
import Shield from 'abstract-factory-pattern/products/Shield';
import Sword from 'abstract-factory-pattern/products/Sword';

export default class CompanyB implements CompanyFactory {
  createSword = (): Item => {
    return new Sword({ defenseBonus: 10 });
  };

  createBow = (): Item => {
    return new Bow({ defenseBonus: 10 });
  };

  createShield = (): Item => {
    return new Shield({ defenseBonus: 10 });
  };
}
