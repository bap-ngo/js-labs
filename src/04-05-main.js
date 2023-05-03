console.log('Welcom to Javascript');

//Conditional statement
const isCovid = true;
if (isCovid) console.log('Stay Home');
else console.log('Go travel');

//Conditional statement with pre-defined values
const month = 1;
switch (month) {
  case 1:
    console.log('Jan');
    break;
  case 2:
    console.log('Feb');
    break;
  default:
    console.log('N/A');
}

//Loop
for (let i = 0; i < 10; i++) console.log(i);

//Function
function sayHello(name) {
  console.log(`Hello ${name}`);
}

sayHello('Khang');
