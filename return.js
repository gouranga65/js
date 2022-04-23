let bread1=prompt("which bread would you like to have:- ");
let vegies1=prompt("what are your fab vegies:- ");
let sauce1=prompt("which sauce would you like to have:- ");

function sandwitch(bread,vegies,sauce) {
    let sandwitch=bread +" bread " +vegies +" vegies "+ sauce +" sauce " +" and your order is ready";
    return sandwitch
}
let vegsandwich=sandwitch(bread1,vegies1,sauce1);
console.log(vegsandwich);