export class MyDate {

  constructor(
    public year: number = 1999,
    public month: number = 4,
    private day: number = 23
  ) { }

  printFormat(): string {
    const day = this.addPadding(this.day);
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
