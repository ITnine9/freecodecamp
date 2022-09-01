// method 1
function translatePigLatin(str) {
    const consonants = ['a', 'e', 'i', 'o', 'u'];
    if ( consonants.includes(str[0]) ) {
        return str + 'way';
    } else if (str.split('').every(item => !consonants.includes(item))) {
        return str + 'ay';
    }
    let i = 0;
    let suffix = '';
    while ( !consonants.includes(str[i]) ) {
        suffix += str[i];
        i++; 
    }

    return str.slice(i) + suffix + 'ay';
}

console.log(translatePigLatin("rhythm"));