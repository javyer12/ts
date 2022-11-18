// function getValue(value: number | string) {
//   return value;
// }

// getValue(12);


function getValue<myType>(value: myType) {
  return value;
}
getValue<string>('string').padStart(2);

getValue<number[]>([ 1, 2, 3, 4 ]).forEach;
