let x=0;
let y=1;

let fn=x+y;
for(let i=0;i<10;i++){
    console.log(x);
    fn=x+y;
    x=y;
    y=fn;
}