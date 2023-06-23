function validMountainArray(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.length < 3) return false;

  let i = 0;

  // Tìm điểm đỉnh (i)
  while (i < numberList.length - 1 && numberList[i] < numberList[i + 1]) {
    i++;
  }

  // Kiểm tra điều kiện đỉnh
  if (i === 0 || i === numberList.length - 1) {
    return false;
  }

  // Kiểm tra giảm dần từ i đến cuối mảng
  while (i < numberList.length - 1 && numberList[i] > numberList[i + 1]) {
    i++;
  }
  return i === numberList.length - 1;
}

export function validMountainArray(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.length < 3) return false;
  let peak = 0;
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] < numberList[i + 1]) peak = i + 1;
    else break;
  }
  if (peak <= 0 || peak >= numberList.length - 1) return false;
  for (let i = 0; i <= peak; i++) {
    if (numberList[i] > numberList[i + 1]) return false;
  }
  for (let i = peak; i < numberList.length; i++) {
    if (numberList[i] < numberList[i + 1]) return false;
  }
  return true;
}
