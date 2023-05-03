function getTaxiCount(passengersCount) {
  // your code here
  if (passengersCount <= 0 || typeof passengersCount !== 'number') return -1;
  if (passengersCount <= 7) return 1;
  if (passengersCount % 7 === 0) return passengersCount / 7;
  return Math.trunc(passengersCount / 7) + 1;
}
console.log(getTaxiCount(3));
console.log(getTaxiCount(6));
console.log(getTaxiCount(10));
console.log(getTaxiCount(26));
