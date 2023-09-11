type Address = string;

interface Strategy {
  buildRoute: (from: Address, to: Address) => void;
}

class Navigator {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  public buildRoute = (from: Address, to: Address) => {
    this.strategy.buildRoute(from, to);
  };
}

type Method = 'driving' | 'walking' | 'bicycling' | 'transit';

class DrivingStrategy implements Strategy {
  public buildRoute = (from: Address, to: Address) => {
    // build with driving
  };
}
