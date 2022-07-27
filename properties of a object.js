let obj={
    name:"gouranga",
    roll:065,
    phNo:9800771765,
    add:"prl"
};
for (const key in obj) {
   console.log(key);
//    if we use obj.key it will give error because we add value in it
   console.log(`${key}:${obj[key]}`);
        
    }