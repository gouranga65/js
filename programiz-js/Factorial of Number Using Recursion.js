// function fibo(value) {
//   let result = 1;
//   for (i = value; i >= 1; i--) {
//     result = result * i;
//   }
//   console.log(result);
// }
// fibo(5);
function fact(numBer) {
  if (numBer == 0) {
    return 1;
  } else {
    return numBer * fact(numBer - 1);
  }
}
let result = fact(5);
console.log(result);
