import CompanyFactory from 'abstract-factory-pattern/factory';
import Items from 'abstract-factory-pattern/products';
import Bow from 'abstract-factory-pattern/products/Bow';
import Shield from 'abstract-factory-pattern/products/Shield';
import Sword from 'abstract-factory-pattern/products/Sword';

export default class CompanyA implements CompanyFactory {
  createSword(): Items {
    return new Sword({ damageBonus: 10 });
  }

  createBow(): Items {
    return new Bow({ damageBonus: 10 });
  }

  createShield(): Items {
    return new Shield({ damageBonus: 10 });
  }
}
