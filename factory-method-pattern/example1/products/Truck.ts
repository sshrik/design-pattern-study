import Transport from 'factory-method-pattern/example1/products';

export default class Truck implements Transport {
  readonly id: number;

  readonly capacity: number;

  constructor(id: number) {
    this.id = id;
    this.capacity = Math.random() * 500 + 500;
  }

  deliver() {
    console.log('Delivering by truck');
  }
}
