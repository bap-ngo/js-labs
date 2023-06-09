function printClock() {
  const intervalId = setInterval(() => {
    const now = new Date();
    const hours = `0${now.getHours()}`.slice(-2);
    const minutes = `0${now.getMinutes()}`.slice(-2);
    const seconds = `0${now.getSeconds()}`.slice(-2);
    console.log(`${hours}:${minutes}:${seconds}`);
  }, 1000);
  return intervalId;
}
const intervalId = printClock();
clearInterval(intervalId);
// function getTimes() {
//   const now = new Date();
//   const hours = `0${now.getHours()}`.slice(-2);
//   const minutes = `0${now.getMinutes()}`.slice(-2);
//   const seconds = `0${now.getSeconds()}`.slice(-2);
//   console.log(`${hours}:${minutes}:${seconds}`);
// }
