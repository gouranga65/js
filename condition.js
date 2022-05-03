var age=2;
if(age<13){
    console.log("you are a kid");
}
else if(age>=13 && age<=19){
    console.log('you are a teenager');
}
// else if(age<=13 || age<=19){
//     console.log('you are a teenager');
// }
else{
    console.log('you are not a teenager');
}

//conditional operator
let Name=19;
console.log((Name>18)?"you can vote":"you cant vote");