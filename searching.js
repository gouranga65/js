let Name=["gouranga","sundar","mahato","sayan","sundar"];
console.log(Name.indexOf("sundar",2));
// if we only use "sundar" then it will give only index number but if we add a index number then it will start search from that given index number.
// if the value is not in the arrey then it will give -1. the values are case sensitive
console.log(Name.lastIndexOf("sundar",3));
// no difference from indexof search just it start search from backword
console.log(Name.includes("sundar"));
// give boolen value
const Price=[100,200,300,20,43,500,300,84,48,92];
const findElm = Price.find((currVal)=>{
    return currVal<400;
});
console.log(findElm);
// find method with fat arrow function.drawback is it is give only one value
console.log(Price.find((currVal)=>currVal<400));
// if i need it only one line and if it is false then it will return undefiend
console.log(Price.findIndex((currVal)=>currVal>400));
// it gives the index number of the element what is greater then 400 or if not found and false then -1 
const priceTag=Price.filter((currVal,index)=>{
    return currVal<400;
});
console.log(priceTag);
// retuen all value in a new arrow if not satisfied then return empty arrey
