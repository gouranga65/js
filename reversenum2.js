let numBer=(vaLue)=>{
    let numBer=vaLue.toString().split("").reverse().join("");
    if(numBer.endsWith("-")){
        numBer="-"+numBer;
        return parseInt(numBer);
    }
};
console.log(numBer(-457));