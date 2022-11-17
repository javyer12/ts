//padre
export abstract class Animal {
  constructor(
    protected name: string
  ) { }
  move() {
    console.log('move forward!!');
  }
  greeting() {
    return `Hello, i am ${this.name}`;
  }
  protected doSomething() {
    console.log('dooing sometihng')
  }
}

//clase hijo
export class Dog extends Animal {
  constructor(
    public name: string,
    public owner: string) {
    super(name);
  }
  woof(times: number): void {
    for (let i = 0; i < times; i++) {
      console.log(`woof!  ${this.name}`);
    }
    this.doSomething();
  }
  move() {
    console.log('moving as a dog');
    super.move();
  }
}

// const fifi = new Animal('fifi');
// fifi.move();
// console.log(fifi.greeting());

const koki = new Dog('koki', 'kiko');
koki.move();
console.log(koki.greeting());
koki.woof(5);
koki.name = 'lili'
koki.move();
