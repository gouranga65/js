let Data = [6, 4, 0, 3, -2, 1];
for (let i = 0; i < Data.length; i++) {
  if (Data[i] < Data[i + 1]) {
    let c = Data[i + 1];
    Data[i + 1] = Data[i];
    Data[i] = c;
  }
  console.log(Data[i]);
}
// let a=5,b=6,c;
// c=b;
// b=a;
// a=c;
// console.log(`a is ${a} and b is ${b}`);
