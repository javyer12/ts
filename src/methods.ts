export class MyDate {
  days = {
    january: 31,
    february: 28,
    march: 31,
    april: 30,
    may: 31,
    jun: 30,
    july: 31,
    august: 31,
    september: 30,
    october: 31,
    november: 30,
    december: 31
  }
  months = {
    january: "january",
    february: "february",
    march: "march",
    april: "april",
    may: "may",
    jun: "jun",
    july: "july",
    august: "august",
    september: "september",
    october: "october",
    november: "november",
    december: "december"
  }
  year: number = 0;
  month: number = 0;
  day: number = 0;

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
