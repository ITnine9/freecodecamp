// method 1
function pairElement(str) {
    const base_pair = [['A', 'T'], ['T', 'A'], ['C', 'G'], ['G', 'C']];
    return str.split('').map(c => {
        for (const pair of base_pair) {
            if (c === pair[0]) return pair;
        }
    })
}

console.log(pairElement("GCG"));

// method 2 - use dictionary data structure
function pairElement2(str) {
    const pairs = {
        A: 'T',
        T: 'A',
        C: 'G',
        G: 'C'
    }

    return str.split('').map(c => [c, pairs[c]]);
}
console.log(pairElement2("GCG"));