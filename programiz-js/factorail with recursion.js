function  fact (n){
    if (n==0){
        return 1;
    }
    else{
       d=n*fact(n-1);
       return d;
    }
};
let call =fact(2);
console.log(call);