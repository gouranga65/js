let value=123;
let reverse=value;
let rem, carry,add,temp=0;
while (value!=0) {
    rem=value%10;
    value=parseInt(value/10)
    temp=temp*10+rem;  
}
if (temp==reverse) {
    console.log("palindrom");
} else {
    console.log("not");
}