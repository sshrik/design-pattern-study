import CompanyFactory from 'abstract-factory-pattern/factory';
import Item from 'abstract-factory-pattern/products';
import Bow from 'abstract-factory-pattern/products/Bow';
import Shield from 'abstract-factory-pattern/products/Shield';
import Sword from 'abstract-factory-pattern/products/Sword';

export default class CompanyA implements CompanyFactory {
  createSword = (): Item => {
    return new Sword({ damageBonus: 10 });
  };

  createBow = (): Item => {
    return new Bow({ damageBonus: 10 });
  };

  createShield = (): Item => {
    return new Shield({ damageBonus: 10 });
  };
}
