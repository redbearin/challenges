cupSwapping = arr => {
  let ballLocation = 'B';
  let regexBallLoc;
  for (let i = 0; i < arr.length; i++) {
    regexBallLoc = new RegExp(ballLocation);
    if(regexBallLoc.test(arr[i])) {
      ballLocation = arr[i].replace(ballLocation, "");
    }
  }
  return ballLocation;
}

const arr = ["BA", "AC", "CA", "BC"];

document.getElementById('ans').textContent = cupSwapping(arr);