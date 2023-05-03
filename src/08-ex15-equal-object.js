function isEqual(obj1, obj2) {
  const keyListObj1 = Object.keys(obj1);
  const keyListObj2 = Object.keys(obj2);
  if (keyListObj1.length !== keyListObj2.length) return false;
  let check = false;
  for (const key of keyListObj1) {
    if (key in obj2 && obj1[key] === obj2[key]) check = true;
  }
  if (check) return true;
  return true;
}

// const subjectList = ['Java', 'PHP', 'Javascript'];
// console.log(subjectList.join());
