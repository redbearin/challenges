drange = (stop, start = 0, step = 1) => {
  let startSub, stopSub, stepSub;
  // build subarrays for each input
  // that includes part of number before dec 
  // and part after
  if (Number.isInteger(start))
    startSub = ["" + start, ""];
  else
    startSub = start.toString().split('.');

  if (Number.isInteger(stop))
    stopSub = ["" + stop, ""];
  else
    stopSub = stop.toString().split('.');

  if (Number.isInteger(step))
    stepSub = ["" + step, ""];
  else
    stepSub = step.toString().split('.');

  const drangeArr = [startSub, stopSub, stepSub];

  // determine max number of places after decimal
  let placesAfrDec = 0;
  for (let i = 0; i < drangeArr.length; i++) {
    if (drangeArr[i][1].length > placesAfrDec)
      placesAfrDec = drangeArr[i][1].length;
  }
  // build new array from start to stop 
  const arr = [];
  for (let i = start; i <= stop; i += step) {
    arr.push(i.toFixed(placesAfrDec));
  }
  return JSON.stringify(arr);
}

const start = 1.2;
const stop = 5.9;
const step = 0.45;

document.getElementById('ans').textContent = drange(stop,start, step);