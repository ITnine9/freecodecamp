// method 1
function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();

  str = str.split(/[\- _]/).join('-');
  return str;
}

console.log(spinalCase('This Is Spinal Tap'));

// method 2 - use regex character classes
function spinalCase2(str) {
  const regex = /\s+|_+/g;

  str = str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();

  return str.replace(regex, '-');
}

console.log(spinalCase2('This Is Spinal Tap'));

// method 3 - the most elegant way
function spinalCase3(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join('-')
    .toLowerCase();
}
console.log(spinalCase3('This Is Spinal Tap'));
