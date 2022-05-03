let a=10,b=20;
console.log(`${a}+${b} is ${a+b}`);

// fat arrow function
const sum=()=>`the sum of two number is ${(a=10)+(b=20)}`;
console.log(sum());