import CompanyFactory from 'abstract-factory-pattern/factory';
import Item from 'abstract-factory-pattern/products';

function giveInitialItem(factory: CompanyFactory): Item[] {
  return [factory.createSword(), factory.createBow(), factory.createShield()];
}

console.log('Choose Company: A, B, C');
