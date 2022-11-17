export class MyService {
  static instance: MyService | null = null;
  private constructor(private name: string) {

  }
  getName() {
    return this.name;
  }

  static create(name: string) {
    if (MyService.instance === null) {
      console.log("solo se crea una vez");
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}

const data = MyService.create("otro servicio");
console.log("from data ", data.getName());
console.log("--------------------------")

const data1 = MyService.create("otro servicio 1");
console.log("from data1 ", data1.getName());
console.log("--------------------------")

const data2 = MyService.create("otro servicio 2");
console.log("from data2", data2.getName());
console.log("--------------------------")


const data3 = MyService.create("otro servicio 3");
console.log("from data3 ", data3.getName());
