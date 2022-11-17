export class Animal {
  constructor(
    public name: string
  ) { }
  move() {
    console.log('move forward!!');
  }
  greeting() {
    return `Hello, i am ${this.name}`;
  }
}
export class Dog extends Animal {
  constructor(
    public name: string,
    public owner: string) {
    super(name);
  }
  woof(times: number): void {
    for (let i = 0; i < times; i++) {
      console.log('woof!');
    }
  }
}
export class Doggi extends Dog {
  constructor(
    public name: string,
    public owner: string) {
    super(name, owner);
  }
  woof(times: number): void {
    for (let i = 0; i < times; i++) {
      console.log('bobi=>', 'woof!');
    }
  }
}
const fifi = new Animal('fifi');
fifi.move();
console.log(fifi.greeting());

const koki = new Dog('koki', 'kiko');
koki.move();
console.log(koki.greeting());
koki.woof(5);

const bobi = new Doggi('bobi', 'cute');
bobi.move();
console.log(bobi.greeting());
bobi.woof(3);
