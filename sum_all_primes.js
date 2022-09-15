// method - 1 prime numbers example: 1 3 5 7 11 13 17
function sumPrimes(num) {
    function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++ ){
            if (num % i == 0) return false;
        }
        return true;
    }

    let sum = 0;
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) sum += i;
    }
    return sum;
}

console.log(sumPrimes(2)); 

// method - 2
function sumPrimes2(num) {
    const primes = [];
    for (let i = 2; i <= num; i++) {
        if (primes.every(prime => i % prime !== 0)) {
            primes.push(i);
        }
    }
    return primes.reduce((sum, curr) => sum + curr, 0);
}
console.log(sumPrimes2(2)); 

// method - 3 use Sieve of Eratosethenes
function sumPrimes3(num) {
    const isPrime = Array(num + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= num; j += i) {
                isPrime[j] = false;
            }
        }
    }

    return isPrime.reduce((acc, curr, idx) => curr === true ? acc + idx : acc, 0);
}

console.log(sumPrimes3(2)); 