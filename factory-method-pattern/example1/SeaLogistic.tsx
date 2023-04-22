import Logistic from 'factory-method-pattern/example1';
import Ship from 'factory-method-pattern/example1/products/Ship';

export default class RoadLogistic implements Logistic {
  shipId: number;

  constructor() {
    this.shipId = 0;
  }

  planDelivery(transports: Ship[], amount: number) {
    const schedule: { transport: Ship; amount: number }[] = [];

    // 배를 최소로 사용하며, 모든 배에는 최대 용량의 반만 사용해야 한다.

    return schedule;
  }

  createTransport() {
    this.shipId += 1;

    return new Ship(this.shipId);
  }
}
