function even(n) {
    let sum = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            sum.push(i);
        }
    }
    console.log(sum);
}
even(20);

function odd(n) {
    let sum = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 1) {
            sum.push(i);
        }
    }
    console.log(sum);
}
odd(20);

function multi(n, multiNumber) {
    let sum = [];
    for (let i = 1; i <= n; i++) {
        if (i % multiNumber === 0) {
            sum.push(i);
        }
    }
    return sum;
}
console.log(multi(20, 3));

function evenOdd(n, evenOdd) {
    let sum = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 === evenOdd) {
            sum.push(i);
        }
    }
    return sum;
}
console.log(evenOdd(20, 1));
