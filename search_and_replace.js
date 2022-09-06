function myReplace(str, before, after) {
  const capRegex = /^[A-Z]\w*/;
  after = capRegex.test(before) ? after[0].toUpperCase() + after.slice(1)
    : after[0].toLowerCase() + after.slice(1);
  return str.replace(before, after);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));