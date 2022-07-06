let value=121,reverse=0,rem,carry,add,resreve=value;
while ((value!=0)) {
    rem=value%10;
    value=parseInt(value/10);
    add=reverse*10+rem;
    // console.log(add);
    if (add=reverse) {
        console.log("paloindrom");
        break;
    } else {
        console.log("not");
        break;
    }
}
