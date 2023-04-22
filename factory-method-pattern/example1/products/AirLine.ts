import Transport from 'factory-method-pattern/example1/products';

export default class AirLine implements Transport {
  readonly id: number;

  readonly capacity: number;

  constructor(id: number) {
    this.id = id;
    this.capacity = Math.random() * 10_000 + 10_000;
  }

  deliver() {
    console.log('Delivering by AirLine');
  }
}
