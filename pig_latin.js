// method 1
function translatePigLatin(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    if ( vowels.includes(str[0]) ) {
        return str + 'way';
    } else if (str.split('').every(item => !vowels.includes(item))) {
        return str + 'ay';
    }
    let i = 0;
    let suffix = '';
    while ( !vowels.includes(str[i]) ) {
        suffix += str[i];
        i++; 
    }

    return str.slice(i) + suffix + 'ay';
}

console.log(translatePigLatin("rhythm"));

// method 2
function translatePigLatin2(str) {
   let piglatin = '';
   const regex = /[aeiou]/gi;
   
   if ( str[0].match(regex) ) {
        piglatin = str + 'way';
   } else if ( !str.match(regex) ) {
        piglatin = str + 'ay';
   } else {
        const vowelIndice = str.indexOf(str.match(regex)[0]);
        piglatin = str.slice(vowelIndice) + str.slice(0, vowelIndice)
            + 'ay';

   }
   return piglatin;
}

console.log(translatePigLatin2("rhythm"));

// method 3 
function translatePigLatin3(str) {
    const consonantRegex = /^[^aeiou]+/;
    const myConsonants = str.match(consonantRegex);
    return myConsonants !== null ?
        str
            .replace(consonantRegex2, '')
            .concat(myConsonants)
            .concat('ay')
        : str.concat('way');
}

console.log(translatePigLatin3("rhythm"));

// method 4
function translatePigLatin4(str) {
    const vowelRegex = /^[aeiou]/;
    if (vowelRegex.test(str)) return str + 'way';

    const regex = /^[^aeiou]+/;
    const consonants = str.match(regex)[0];

    return str.slice(consonants.length) + consonants + 'ay';
}

// method 5
function translatePigLatin5(str) {
    return str
            .replace(/^[aeiou]+\w*/, '$&way')
            .replace(/(^[^aeiou]+)(\w*)/, '$2$1ay')
}

// method 6 - recursive 
function translatePigLatin6(str, charPos = 0) {
    return ['a', 'e', 'i', 'o', 'u'].includes(str[0]) 
        ? str + (charPos === 0 ? 'way' : 'ay')
        : charPos === str.length 
            ? str + 'ay'
            : translatePigLatin6(str.slice(1) + str[0], charPos + 1);

}

