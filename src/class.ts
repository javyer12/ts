const date = new Date();
date.getDay();
const dates = new Date(2000, 1, 11);


export class MyDate {
  year: number = 0;
  month: number = 0;
  day: number = 0;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}
const myDate = new MyDate(2000, 1, 1);
console.log(myDate);
