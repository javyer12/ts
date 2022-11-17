export class MyDate {
  // todo lo que este explicitamente es publico
  year: number = 0;
  month: number = 0;
  private day: number = 0;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`
  }
  //literal types
  add(amount: number, type: 'day' | 'month' | 'year') {
    switch (type) {
      case 'day':
        this.day += amount;
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
}
const myDate = new MyDate(2000, 8, 9);
console.log(myDate.printFormat());
myDate.add(3, 'day');
console.log(myDate.printFormat());
