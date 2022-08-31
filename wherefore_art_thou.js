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