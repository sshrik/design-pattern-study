import Item from 'abstract-factory-pattern/products';

export default interface CompanyFactory {
  createSword: () => Item;
  createBow: () => Item;
  createShield: () => Item;
}
