function fibo(value) {
  let result = 1;
  for (i = value; i >= 1; i--) {
    result = result * i;
  }
  console.log(result);
}
fibo(5);