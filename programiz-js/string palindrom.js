let str = "acba";
let arrey = str.split("");

let revarrey = arrey.reverse();
let join = revarrey.join("");

if (str == join) {
  console.log("its is a plaindrom");
} else {
  console.log("not a plaindrom");
}
