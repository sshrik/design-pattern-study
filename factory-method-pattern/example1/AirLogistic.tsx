import Logistic from 'factory-method-pattern/example1';
import AirLine from 'factory-method-pattern/example1/products/AirLine';

export default class RoadLogistic implements Logistic {
  airLineId: number;

  constructor() {
    this.airLineId = 0;
  }

  planDelivery(transports: AirLine[], amount: number) {
    const schedule: { transport: AirLine; amount: number }[] = [];

    // 비행기를 최소로 사용한다.

    return schedule;
  }

  createTransport() {
    this.airLineId += 1;

    return new AirLine(this.airLineId);
  }
}
