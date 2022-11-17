export class MyDate {

  constructor(
    public year: number = 1999,
    private _month: number = 4,
    private _day: number = 23
  ) { }

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
    return `${day}/${month}/${this.year}`;
  }
  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`
  }
  add(amount: number, type: 'day' | 'month' | 'year') {
    switch (type) {
      case 'day':
        this._day += amount;
        break
      case 'month':
        this._month += amount;
        break
      case 'year':
        this.year += amount;
        break
      default:
        "that is not date";
        break
    }
  }
  get day() {
    return this._day
  }
  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }
  get month() {
    return this._month;
  }
  set month(newValue: number) {
    if (newValue >= 1 && newValue <= 12) {
      this._month = newValue;
    }
    else {
      Error("Invalid month");
    }
  }
}

const myDate = new MyDate(2000, 5, 7);
console.log(myDate.printFormat());

myDate.month = 21;
console.log('erroraso', myDate.month);
