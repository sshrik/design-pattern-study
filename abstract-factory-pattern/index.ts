import CompanyFactory from 'abstract-factory-pattern/factory';
import Items from 'abstract-factory-pattern/products';

function giveInitialItem(factory: CompanyFactory): Items[] {
  return [factory.createSword(), factory.createBow(), factory.createShield()];
}

console.log('Choose Company: A, B, C');
