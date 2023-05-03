function cloneObject(obj) {
  // your code here
  const cloneObj = {};
  for (let key in obj) {
    cloneObj[key] = obj[key];
  }
  return cloneObj;
}
