export class MyDate {

  constructor(
    public year: number = 1999,
    public month: number = 4,
    private _day: number = 23
  ) { }

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this.month);
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
        this.month += amount;
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
}

const myDate = new MyDate(2000, 5, 7);
console.log(myDate.printFormat());
console.log(myDate.day);
console.log(myDate.isLeapYear);
const leap = new MyDate(2000, 7, 10);
console.log('2000', leap.isLeapYear);

const leap1 = new MyDate(2001, 7, 10);
console.log('2001', leap1.isLeapYear);
