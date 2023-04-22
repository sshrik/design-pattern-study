export default interface Transport {
  id: number;
  capacity: number;

  deliver: () => void;
}
