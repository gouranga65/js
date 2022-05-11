// let input=9474;
// let temp=0;
// let value=input;
// let noOfdigit=input.toString().length;
// console.log(noOfdigit);
// for(let i=1;i<=noOfdigit;i++){
//     let rem=input%10;
//     temp+=rem**noOfdigit;
//     input=parseInt(input/10);
// }
// if (temp==value) {
//     console.log("armstrong");
// }
// else{
//     console.log("not");
// }
let input=(number)=>{
    let noOfdigit=number.toString().length;
    console.log(noOfdigit);
    let temp=0;
    let value=number;
    // console.log(value);
    for(let i=1;i<=noOfdigit;i++){
        let rem=number%10;
        temp+=rem**noOfdigit;
        number=parseInt(number/10);
    }
    if (value==temp) {
        console.log("armstrong");
    }
    else{
        console.log("not");
    }
};
input(153);