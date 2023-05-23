function log() {
  console.log('Tada');
}

function throttle(callBack, wait) {
  let isThrottle = true;
  return function () {
    if (isThrottle) {
      isThrottle = false;
      setTimeout(() => {
        callBack();
        isThrottle = true;
      }, wait);
    }
  };
}

const throttleLog = throttle(log, 1000);
window.addEventListener('resize', throttleLog);
