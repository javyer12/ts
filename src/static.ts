class MyMath {
  static readonly PI = 3.1416;

  static max(...num: number[]) {
    console.log(num);
    return num.reduce((max, item) => max >= item ? max : item,);
  }
}

console.log("my math method: ", MyMath.PI);
console.log(MyMath.max(12, 2, 1, 2));
console.log(MyMath.max(-12, -2, -1, - 2));
