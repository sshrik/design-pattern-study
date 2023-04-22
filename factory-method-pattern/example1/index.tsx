import Transport from 'factory-method-pattern/example1/products';

type Schedule = {
  transport: Transport;
  amount: number;
};

export default interface Logistic {
  planDelivery: (transports: Transport[], amount: number) => Schedule[];
  createTransport: () => Transport;
}
