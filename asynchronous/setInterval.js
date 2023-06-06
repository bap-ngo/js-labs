function countDown(seconds) {
  const id = setInterval(() => {
    console.log(seconds);
    if (seconds === 0) {
      clearInterval(id);
    }
    seconds -= 1;
  }, 1000);
}

countDown(10);
