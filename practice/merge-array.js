function mergeArray(a, b) {
  // your code here
  const checkType = !Array.isArray(a) || !Array.isArray(b);
  if ((a.length === 0 && b.length === 0) || checkType) return [];
  for (const value of b) {
    if (!a.includes(value)) a.push(value);
  }
  return a;
}
