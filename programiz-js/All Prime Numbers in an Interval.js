const lowerNumber =parseInt(prompt("enter the lower number="));
const higherNumber =parseInt(prompt("emnter the hihgher number="));

console.log(`prime number between ${lowerNumber} to ${higherNumber} are ---`);

for(let i = lowerNumber; i<= higherNumber; i++){
let flag = 0;

for (let j =2 ; j<i;j++){
    if(i%j==0){
        flag=1;
        break;
    }
}
if(i>1 && flag == 0){
    console.log(i);
}

}