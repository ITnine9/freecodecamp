// method 1 - double loops
function uniteUnique(...arr) {
    let unique = [];
    arr.forEach(a => {
        a.forEach(num => {
            if (!unique.includes(num)) {
                unique.push(num);
            }
        })
    });
    return unique;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// method 2 - reduce
function uniteUnique2(...arr) {
    return arr.flat().reduce((acc, cur) => {
        if (!acc.includes(cur)) {
            return [...acc, cur];
        }
        return acc;
    }, [])
}
console.log(uniteUnique2([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// method 3 - use Set
function uniteUnique3(...arr) {
    return [...new Set(arr.flat())];
}
console.log(uniteUnique3([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// method 3.1 - arrow function
const uniteUnique4 = (...arr) => [...new Set(arr.flat())];

// method 4 
function uniteUnique5(...arr) {
    return arr.flat()
                .filter((item, idx, arr) => arr.indexOf(item) === idx);
}