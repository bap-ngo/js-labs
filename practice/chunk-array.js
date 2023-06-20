function chunkArray(array, size) {
  // your code here ...
  const chunks = Math.round(array.length / size);
  if (!Array.isArray(array) || size <= 0 || array.length === 0) return [];
  if (chunks > 20) throw new Error('Too many chunks');
  const newArr = [];
  let start = 0;
  let end = size;
  for (let i = 0; i < chunks; i++) {
    newArr.push(array.slice(start, end));
    start = end;
    end += size;
  }
  return newArr;
}
