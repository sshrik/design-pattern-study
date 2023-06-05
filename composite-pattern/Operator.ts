import Component from './Component';

export class Add implements Component {
  private _value: number;

  private _left: Component;

  private _right: Component;

  constructor(left: Component, right: Component) {
    this._value = left.value + right.value;
    this._left = left;
    this._right = right;
  }

  set left(left: Component) {
    this._left = left;
    this._value = this._left.value + this._right.value;
  }

  get left(): Component {
    return this._left;
  }

  set right(right: Component) {
    this._right = right;
    this._value = this._left.value + this._right.value;
  }

  get right(): Component {
    return this._right;
  }

  set value(value: number) {
    this._value = value;
  }

  get value(): number {
    return this._value;
  }
}
