import AirLogistic from 'factory-method-pattern/example1/AirLogistic';

// 만약 from ~ to 경로가 바다라면 SeaLogistic을 사용한다.
// 만약 from ~ to 경로가 육지라면 RoadLogistic을 사용한다.
// 만약 from ~ to 경로가 바다와 육지가 포함이라면 AirLogistic을 사용한다.

function deliveryAirline(from: string, to: string) {
  const logistic = new AirLogistic();

  const transports = [logistic.createTransport(), logistic.createTransport()];

  const schedule = logistic.planDelivery(transports, 100);

  console.log(`from: ${from} to: ${to}`);

  console.log('schedule: ', schedule);
}
