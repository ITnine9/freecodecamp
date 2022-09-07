// method 1 
function fearNotLetter(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const idx = alphabet.split('').indexOf(str[0]);
    let missing = alphabet.slice(idx, idx + str.length)
            .split('')
            .filter(letter => !str.split('').includes(letter));
    return missing[0];
}

console.log(fearNotLetter("abce"));

// method 2
function fearNotLetter2(str) {
    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        if ( charCode !== str.charCodeAt(0) + i ) {
            return String.fromCharCode(charCode - 1);
        }
    }
    return undefined;
}
console.log(fearNotLetter2("abce"));

// method 3
function fearNotLetter3(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i + 1) - str.charCodeAt(i) > 1) {
            return String.fromCharCode(str.charCodeAt(i) + 1);
        }
    }
    return undefined;
}
console.log(fearNotLetter3("abce"));