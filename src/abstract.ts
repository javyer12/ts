import { Animal, Dog } from './protected';

export class Lion extends Animal {
  constructor(public name: string) {
    super(name);
  }
  changeName(namer: string) {
    this.name = namer;
  }
}
const lion = new Lion("kilo");
console.log(lion.name);
console.log(lion.changeName("robocot"));
console.log(lion.move());
