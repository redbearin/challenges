function trackRobot(...steps) {
  const stepsArr = [];
  for (let i = 0; i < arguments.length; i++) {
    stepsArr.push(arguments[i]);
  }
  let ydir = 0;
  let xdir = 0;
  for (let i = 0; i < stepsArr.length; i++) {
    if (i % 4 === 0)
      ydir += stepsArr[i];
    if (i % 4 === 1)
      xdir += stepsArr[i];
    if (i % 4 === 2)
      ydir -= stepsArr[i];
    if (i % 4 === 3)
      xdir -= stepsArr[i];
  }
  return JSON.stringify([xdir, ydir]);
}

document.getElementById('ans').textContent = trackRobot(-10, 20, 10);