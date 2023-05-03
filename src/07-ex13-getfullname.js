function getFullName(firstName, lastName) {
  // your code here
  firstName = firstName
    ? firstName.trim()[0].toUpperCase() + firstName.trim().slice(1).toLowerCase()
    : '';
  lastName = lastName
    ? lastName.trim()[0].toUpperCase() + lastName.trim().slice(1).toLowerCase()
    : '';
  return `${firstName} ${lastName}`.trim();
}

console.log(getFullName('john', 'pHaM'));
