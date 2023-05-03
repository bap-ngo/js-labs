// using split
function extractDomainV1(email) {
  // your code here
  if (!email) return '';
  return email.split('@')[email.split('@').length - 1];
}

// using indexOf() and slice()
function extractDomainV2(email) {
  // your code here
  const index = email.indexOf('@');
  return email.slice(index + 1);
}
