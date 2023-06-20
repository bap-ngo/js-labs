function countWords(str) {
  // your code here
  if (str === '') return 0;
  return str.trim().replace(/\s+/g, ' ').split(' ').length;
}

console.log(countWords('easy frontend'));
console.log(countWords('   easy     frontend     abc'));
