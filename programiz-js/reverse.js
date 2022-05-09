//  main type fat arrow function
// let Sum=()=>{
//     let a=15;
//     let b=10;
//     return a+b;
// }
// console.log(Sum());

// 2nd type

// let num1=10;
// let num2=20;

// let num=()=>{return num1+num2}
// console.log(num());

// 3rd type when we have one line of code

// let a=30;
// let b=20;
// let Result=()=> a+b
// console.log(Result());

let revNum=(num)=>{
    let revNum=num.toString().split("").reverse().join("");
    
    // the comments line for reverse a negetive number
    // if (revNum.endsWith("-")) {
    //     revNum="-"+revNum;
    //     return parseInt(revNum);  
    // };
   console.log(revNum);
} ;
// console.log(revNum(-243));
revNum(243);