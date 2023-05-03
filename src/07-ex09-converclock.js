const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_MIN = 60;
function formatTime(seconds) {
  // your code here
  let remainSeconds = 0;
  if (seconds < 0 || seconds > 86400 || typeof seconds !== 'number') return '';
  const hh = Math.trunc(seconds / SECONDS_PER_HOUR); //1
  remainSeconds = seconds % SECONDS_PER_HOUR;
  const mm = Math.trunc(remainSeconds / SECONDS_PER_MIN); //10
  const ss = remainSeconds % SECONDS_PER_MIN; // 56

  return `${`0${hh}`.slice(-2)}:${`0${mm}`.slice(-2)}:${`0${ss}`.slice(-2)}`;
}

console.log(formatTime(4256));
