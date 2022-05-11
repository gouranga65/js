let input=9474;
let temp=0;
let value=input;
let noOfdigit=input.toString().length;
console.log(noOfdigit);
for(let i=1;i<=noOfdigit;i++){
    let rem=input%10;
    temp+=rem**noOfdigit;
    input=parseInt(input/10);
}
if (temp==value) {
    console.log("armstrong");
}
else{
    console.log("not");
}