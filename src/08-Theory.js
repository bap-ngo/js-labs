//Declare Object
const student = {
  name: 'Khang',
  age: 23,
  isHero: true,
  'key has space': true,
  sayHello() {
    console.log('Hello');
  },
};

//Get value of key
console.log(student.name); //Khang
console.log(student.age); //23
//use square brackets
console.log(student['key has space']); //true
//console.log(student.key has space); //error
const key = 'key has space';
console.log(student.key); //undefined
console.log(student[key]);

const student2 = {
  id: 1,
  name: 'Van A',
  isHero: true,
};

//Update value of a key
student2.name = 'Van B';

//delete key
delete student2.name;

console.log(student2.name); //undefined

//Set a new key
student2.mark = 10;
student2['age'] = 23;

console.log(student2.name);
console.log(student2.age);
console.log(student2.mark);

//Destructuring
const student3 = {
  name: 'Easy Frontend',
  age: 18,
};

// const name = student3.name;
// const age = student3.age;

const { name, age } = student3;

console.log(name, age);

console.log(name);
console.log(age);

//Clone Oject
const teacher = {
  name: 'Easy Frontend',
  age: 18,
};
const moreProps = {
  isHero: true,
  gender: 'male',
};

//v1 const cloneObject = Object.assign({}, teacher, moreProps);
const cloneObject = {
  ...teacher,
  ...moreProps,
};
console.log(cloneObject);

//For
const customer = {
  id: 1,
  name: 'Van A',
  isHero: true,
};
console.log('id' in customer);

//v1
// const keyList = Object.keys(customer);
// for (let i = 0; i < keyList.length; i++) {
//   const key = keyList[i];
//   console.log('key:', key);
//   console.log('value:', customer[key]);
// }

//v2 forEach
// const keyList = Object.keys(customer);
// keyList.forEach((key) => {
//     console.log('key:', key);
//     console.log('value:', customer[key]);
// });

//v3 (Recommand)
for (const key in teacher) {
  console.log('key:', key);
  console.log('value:', customer[key]);
}
