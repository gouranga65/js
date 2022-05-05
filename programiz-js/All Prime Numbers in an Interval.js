// prime  number in a range

let num1=10;
let num2=20;

for ( let i =num1;i<=num2;i++){
    for (var j=2;j<=i;j++){
        if (i%j==0) {
            break;
        }
    }if (i==j) {
        console.log(j);
    }
}