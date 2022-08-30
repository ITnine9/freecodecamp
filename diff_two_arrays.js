// method 1 - Imperative Solution
function diffArray(arr1, arr2) {
    let arr1_diff = arr1.filter(e => {
        return !arr2.includes(e);
    })

    let arr2_diff = arr2.filter(e => {
        return !arr1.includes(e);
    })

    return [...arr1_diff, ...arr2_diff];
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// method 2 - merge two arrays Declarative Solution
// fav
function diffArray2(arr1, arr2) {
    return [...arr1, ...arr2]
        .filter(e => !arr1.includes(e) || !arr2.includes(e));
}

console.log(diffArray2([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// method 3 - Declarative Solution
function diffArray3(arr1, arr2) {
    return [...diff(arr1, arr2), ...diff(arr2, arr1)];
    function diff(a, b) {
        return a.filter(a_item => !b.includes(a_item));
    }
}

console.log(diffArray3([1, 2, 3, 5], [1, 2, 3, 4, 5]));