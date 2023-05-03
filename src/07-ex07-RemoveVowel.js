function removeVowel(str) {
  // your code here
  if (!str) return '';
  return str
    .replace('u', '')
    .replace('e', '')
    .replace('o', '')
    .replace('a', '')
    .replace('i', '')
    .trim();
}
