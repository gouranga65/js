let data = [2, 3, 1, 0, -6, 65];
for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data.length - i - 1; j++) {
    if (data[j] > data[j + 1]) {
      var arr = data[j];
      data[j] = data[j + 1];
      data[j + 1] = arr;
    }
  }
}
console.log(data);
