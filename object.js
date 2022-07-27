let obj={
    name:"sundar",
    mob:9800,
    status:{
        online:"yes"
    }
};
// object destrecturing
let {name:userName,status:{online}}=obj;
// change the "name to userName"
console.log(`my name is ${userName}`);
console.log(` ${online} he is online`);