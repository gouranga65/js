let Name=["gouranga","sundar","mahato","sayan"];
console.log(Name.indexOf("sundar"));
console.log(Name[1]);
console.log(Name.length);
for (let i = 0; i < Name.length; i++) {
    console.log(Name[i]);
}
// for of loop
for (const abcd of Name) {
    console.log(abcd);
} 
// for in loop
for (const abcd in Name) {
    console.log(abcd);
}
// for each loop
Name.forEach((abcd,index,Name) => {
    console.log(abcd+" index value is "+ index+" arrey us in "+Name);
});