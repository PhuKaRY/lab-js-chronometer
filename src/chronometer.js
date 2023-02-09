class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    // let Time = 1;
    // const intervalId = setInterval(this.currentTime () {
    //   console.log(i);
    //   i++;
    //   if (i > 10) {
    //     clearInterval(intervalId);
    //   }
    // }, 200);
  }

  getMinutes() {
    // ... your code goes here

    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    // ... your code goes here
    return.Math.floor(this.currentTime/100)%60;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
