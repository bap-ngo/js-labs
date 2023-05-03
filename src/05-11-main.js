// Write a function to notification error from Error code
//E01 : Invalid username or password
//E02: Cant connect to Database
//E03: Server runtime
//Other case: Somethings went wrong

//v1
function notifyError(errorCode) {
  let res;
  switch (errorCode) {
    case 'E01':
      res = 'Invalid username or password';
      break;
    case 'E02':
      res = 'Cant connect to Database';
      break;
    case 'E03':
      res = 'Server runtime!!';
      break;
    default:
      res = 'Somethings went wrong~~~!!!';
  }
  return res;
}

console.log(notifyError('E01'));
console.log(notifyError('E02'));
console.log(notifyError('E03'));
console.log(notifyError('E04'));

//v2
function notifyError(error) {
  const errorMap = {
    E01: 'Invalid username or password',
    E02: 'Cant connect to Database',
    E03: 'Server runtime!!!',
  };
  return errorMap[error] || 'Somthings went wrong~~~';
}

console.log(notifyError('E01'));
console.log(notifyError('E02'));
console.log(notifyError('E03'));
console.log(notifyError('E04'));
