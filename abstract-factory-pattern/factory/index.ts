import Items from 'abstract-factory-pattern/products';

export default interface CompanyFactory {
  createSword(): Items;
  createBow(): Items;
  createShield(): Items;
}
