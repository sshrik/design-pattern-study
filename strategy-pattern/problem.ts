type Address = string;

type Method = 'driving' | 'walking' | 'bicycling' | 'transit';

export class Navigation {
  public buildRoute = (from: Address, to: Address, method: Method) => {
    switch (method) {
      case 'driving':
        // build with driving
        break;
      case 'walking':
        // build with walking
        break;
      case 'bicycling':
        // build with bicycling
        break;
      default:
      // build with something
    }
  };
}
