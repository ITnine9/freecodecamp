// method - 1
function smallestCommons(arr) {
    // fill arr with numbers in the range
    arr.sort( (a, b) => a - b);
    let length = arr[arr.length - 1] - arr[0];
    for (let i = 1; i < length; i++) {
        arr.splice(i, 0, arr[0] + i);
    }

    function divideEvenly(arr, num) {
        return arr.every(n => num % n === 0);
    }

    let largest = arr[arr.length - 1];
    let multiple = largest;
    let start = 2;
    while (!divideEvenly(arr.slice(0, -1), multiple)) {
        multiple = largest * start;
        start++;
    }
    return multiple;
}

console.log(smallestCommons([1, 5]));

// method - 2
function smallestCommons2(arr) {
    const [min, max] = arr.sort( (a, b) => a -b );
    const numberDivisor = max - min + 1;

    // find largest possible value for SCM
    let upperBound = 1;
    for (let i = min; i <=max; i++) {
        upperBound *= i;
    } 

    for (let multiple = max; multiple <= upperBound; multiple += max) {
        let divisorCount = 0;
        for (let i = min; i <= max; i++) {
            if (multiple % i == 0 ) {
                divisorCount++;
            }
        }
        if (divisorCount === numberDivisor) {
            return multiple;
        }
    }
}
console.log(smallestCommons2([1, 5]));
