// method 1 - imperative 
function whatIsInAName(collection, source) {
    return collection.filter(obj => {
        for (const key in source) {
            if (!obj.hasOwnProperty(key)
                || obj[key] !== source[key]) {
                return false;
            }
        }
        return true;
    })
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

// method 2 - use es6 arr.every()
function whatIsInAName2(collection, source) {
    const sourceKeys = Object.keys(source);
    return collection.filter(obj => 
        sourceKeys.every(key => 
            obj.hasOwnProperty(key) && 
                obj[key] === source[key]
        )
    )
}

console.log(whatIsInAName2([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

// method 3 - use arr.map & arr.reduce 
// This method is similar to method 2
function whatIsInAName3(collection, source) {
    const sourceKeys = Object.keys(source);
    return collection.filter(obj => 
        sourceKeys.map(key => obj.hasOwnProperty(key)
            && obj[key] === source[key])
                .reduce((a, b) => a && b)
    )
}
console.log(whatIsInAName3([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));