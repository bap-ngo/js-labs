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

const demo = [1, 2, 3];
for (const value of demo) {
  console.log(value);
}

const student2 = {
  id: 2,
  name: 'Khang2',
  gender: 'male2',
};

// console.log(Object.entries(student2));
// console.log(Object.fromEntries(Object.entries(student2)));

Object.defineProperty(student2, Symbol.iterator, {
  value: function () {
    let index = 0;
    const entries = Object.entries(this);
    return {
      next() {
        const result = { value: entries[index], done: index > entries.length - 1 };
        index++;
        return result;
      },
    };
  },
});

for (const value of student2) {
  console.log(value);
}
