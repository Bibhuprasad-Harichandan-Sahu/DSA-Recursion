
// program to find the factorial of a number
function factorial(x) {

    // if number is 0
    if (x === 0) {
        return 1;
    }

    // if number is positive
    else {
        return x * factorial(x - 1);
    }
}

const num = 3;

// calling factorial() if num is non-negative
if (num > 0) {
    let result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}



function factorial1(n) {
    if (n === 1){
        return 1;
    }else{
        return n * factorial1( n- 1);
    }
}
console.log(factorial1(4));//24