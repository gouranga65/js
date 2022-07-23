// JavaScript Program to Merge Two Arrays and Remove Duplicate Items
let arr=[1,2,3,4,5];
let arr1=[6,7,8,9,1];
let add=arr.concat(arr1);
// for add two arrey
let newarr=[... new Set(add)]
// for remove duplicate value
console.log(newarr);