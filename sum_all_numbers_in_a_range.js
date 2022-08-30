// Sum All Numbers in a Range
// method 1 - first try
function sumAll(arr) {
    arr.sort((a, b) => a - b);
    let a = arr[0], b = arr[1];
    let result = 0;
    while (a < b) {
        result = result + (a + b);
        a++;
        b--;
    }
    return result;
}

console.log(sumAll([1, 4]));

// method 2 - use Math.min and Math.max
function sumAll2(arr) {
    let min = Math.min(arr[0], arr[1]);
    let max = Math.max(arr[0], arr[1]);
    let result = 0;
    for (let i = min; i <= max; i++) {
        result += i;
    }
    return result;
}

function sumAll21(arr) {
    let result = 0;
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        result += i;
    }
    return result;
}

console.log(sumAll21([1, 4]));

// method 3 - arithmetic progression summing formula 
function sumAll3(arr) {
    let numCount = Math.abs(arr[0] - arr[1]) + 1;

    let result = ((arr[0] + arr[1]) * numCount) / 2;

    return result;
}


console.log(sumAll3([5, 10]));

// method 4 - recursion
function sumAll4(arr) {
    let [first, last] = [...arr].sort((a, b) => a - b);
    return first !== last 
        ? first + sumAll4([first + 1, last]) 
        : first;
}

console.log(sumAll4([5, 10]));