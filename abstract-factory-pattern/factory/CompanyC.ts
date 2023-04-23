import CompanyFactory from 'abstract-factory-pattern/factory';
import Items from 'abstract-factory-pattern/products';
import Bow from 'abstract-factory-pattern/products/Bow';
import Shield from 'abstract-factory-pattern/products/Shield';
import Sword from 'abstract-factory-pattern/products/Sword';

export default class CompanyC implements CompanyFactory {
  createSword(): Items {
    return new Sword({ rangeBonus: 1 });
  }

  createBow(): Items {
    return new Bow({ rangeBonus: 1 });
  }

  createShield(): Items {
    return new Shield({ rangeBonus: 1 });
  }
}
