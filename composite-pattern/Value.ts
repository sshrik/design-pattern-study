import Component from 'composite-pattern/Component';

class Value implements Component {
  private _value: number;

  constructor(value: number) {
    this._value = value;
  }

  set value(value: number) {
    this._value = value;
  }

  get value(): number {
    return this._value;
  }
}

export default Value;
