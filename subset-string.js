let data="dog";
let k=1;
for (let i = 1; i < data.length-1; i++) {
   for (let j = 0; j < data.length; j++){
    let c=data[j]+data[j+i];
    console.log(c);
   }
}