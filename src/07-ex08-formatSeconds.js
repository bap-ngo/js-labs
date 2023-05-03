// using if...else
function formatSecondsV1(seconds) {
  // your code here
  if (seconds < 0 || seconds >= 60 || typeof seconds !== 'number') return '';
  if (seconds < 10) return `0${seconds}`;
  return seconds.toString();
}

// using slice()
function formatSecondsV2(seconds) {
  // your code here
  if (seconds < 0 || seconds >= 60 || typeof seconds !== 'number') return '';
  return `0${seconds}`.slice(-2);
}
