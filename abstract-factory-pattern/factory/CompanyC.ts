import CompanyFactory from 'abstract-factory-pattern/factory';
import Item from 'abstract-factory-pattern/products';
import Bow from 'abstract-factory-pattern/products/Bow';
import Shield from 'abstract-factory-pattern/products/Shield';
import Sword from 'abstract-factory-pattern/products/Sword';

export default class CompanyC implements CompanyFactory {
  createSword = (): Item => {
    return new Sword({ rangeBonus: 1 });
  };

  createBow = (): Item => {
    return new Bow({ rangeBonus: 1 });
  };

  createShield = (): Item => {
    return new Shield({ rangeBonus: 1 });
  };
}
