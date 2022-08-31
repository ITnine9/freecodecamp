// method 1
function destroyer(...arr) {
    return arr[0].filter(item => {
        return !arr.slice(1).includes(item);
    })
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// method 1.1
function destroyer2(arr, ...valsToRemove) {
    return arr.filter(e => !valsToRemove.includes(e));
}
console.log(destroyer2([1, 2, 3, 1, 2, 3], 2, 3));