function createIterable(n) {
  let i = 0;
  return {
    [Symbol.iterator]() {
      return {
        next() {
          return {
            value: i++,
            done: i > n,
          };
        },
      };
    },
  };
}

const numberList = createIterable(10);
for (const num of numberList) {
  console.log(num);
}

const student = {
  id: 1,
  name: 'Khang',
  gender: 'male',
};

Object.defineProperty(student, Symbol.iterator, {
  value: function () {
    let i = 0;
    const keyList = Object.keys(this);
    return {
      next() {
        const result = {
          value: [keyList[i], student[keyList[i]]],
          done: i > keyList.length - 1,
        };
        i++;
        return result;
      },
    };
  },
});

for (const [key, value] of student) {
  console.log(key, value);
}

// for (const prop in student) {
//   console.log(student[prop]);
// }

// const arr = [1, 2, 3];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
