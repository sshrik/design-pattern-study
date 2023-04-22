import Logistic from 'factory-method-pattern/example1';
import Truck from 'factory-method-pattern/example1/products/Truck';

export default class RoadLogistic implements Logistic {
  truckId: number;

  constructor() {
    this.truckId = 0;
  }

  planDelivery(transports: Truck[], amount: number) {
    const schedule: { transport: Truck; amount: number }[] = [];

    // 트럭을 최대로 사용하며, 각 트럭에게 최소한의 화물을 실어보내는 로직

    return schedule;
  }

  createTransport() {
    this.truckId += 1;

    return new Truck(this.truckId);
  }
}
