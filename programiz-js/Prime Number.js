// Prime Number
function isPrime(Value) {
    let i;
    for (let i = 2; i < Value; i++) {
        if (Value%i===0) {
            console.log(`${Value} is not a prime number`);
            return;
        }
        console.log(`${Value} is a prime number`);
        return;
    }
    
}
isPrime(23);