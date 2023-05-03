function getTicketPrice(age) {
  const inValidAge = age <= 0 || age > 125 || typeof age !== 'number';
  if (inValidAge) return -1;
  if (age < 6 || age >= 70) return 0;
  if (age >= 6 && age <= 12) return 20000;
  if (age > 12) return 50000;
}
