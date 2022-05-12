let Start=100;
let End=1000;
for(let i=Start;i<=End;i++){
    let Temp=i;
    let Add=0;
    let noOFdigit=i.toString().length;
    while (Temp>0) {
        let Rem=Temp%10;
        Add+=Rem**noOFdigit;
        Temp=parseInt(Temp/10);
    }
    if (Add==i) {
        console.log(i);
    }
}
// referance :-https://www.programiz.com/javascript/examples/armstrong-number-interval 
// referance:-https://www.youtube.com/watch?v=gS0gQ06miOw&ab_channel=ScoreShala