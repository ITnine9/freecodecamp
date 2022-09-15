// method 1
function sumFibs(num) {
    let prevNum = 0;
    let currNum = 1;
    let result = 0;
    while (currNum <= num) {
        if (currNum % 2 !== 0) {
            result += currNum;
        }
        currNum += prevNum;
        prevNum = currNum - prevNum;
    }

    return result;
}

// method 2 - use array
function sumFibs2(num) {
    if (num <= 0) return 0;

    const arrFib = [1, 1];
    let nextFib = 0;

    while ( (nextFib = arrFib[0] + arrFib[1]) <= num ) {
        arrFib.unshift(nextFib);
    }
    return arrFib.filter(fib => fib % 2 !== 0).reduce((acc, curr) => acc + curr);
}
console.log(sumFibs2(4));

// method 3 - the mathmematical way
function sumFibs3(num) {
    // 0 1 1 2 3 5 8 13 21
    let f0 = 0;
    let f1 = 1;
    let f2 = 1; 
    let sum = 0;

    while (f1 <= num) {
        sum += f1;
        if (f2 <= num) sum += f2;
        [f0, f1] = [f1 + f2, (f1 + f2) + f2];
        f2 = f0 + f1;
    }

    return sum;
}
console.log(sumFibs3(4));