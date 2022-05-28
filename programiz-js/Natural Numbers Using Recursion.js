// with functiom
// let sum=0
// function Add(x){
//     for (let i=0;i<=x;i++){
//         sum+=i
//     } console.log(sum);
// }
// Add(6);

// with recursion
function Add(num){
    if (num>0) {
        return num+ Add(num-1);
    } else {
        return num;
    }
};
let val=Add(5);
console.log(val);

