function isStrongPassword(password) {
  // your code here
  if (password.length < 8) return false;
  const regex = /^(?=.*\d)(?=.*[A-Za-z])(?=.*[!@#$%^&*()]).*$/;
  return regex.test(password);
}

function isStrongPassword(password) {
  // your code here
  const special = '!@#$%^&*()';
  if (password.length < 8) return false;
  let charUpperCase = false;
  let charLowerCase = false;
  let digit = false;
  let hasSpecial = false;
  for (let i = 0; i < password.length; i++) {
    const char = password[i];
    if (char >= 'A' && char <= 'Z') charUpperCase = true;
    else if (char >= 'a' && char <= 'z') charLowerCase = true;
    else if (char >= 0 && char <= 9) digit = true;
    else if (special.includes(char)) hasSpecial = true;
  }
  return charUpperCase && charLowerCase && digit && hasSpecial;
}
