flickSwitch = arr => {
  let on = true;
  let final = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'flick') {
      on ? on = false : on = true;
    }
    on ? final.push(true) : final.push(false);
  }
  return JSON.stringify(final);
}
const arr = ["flick", 11037, 3.14, 53];

document.getElementById('ans').textContent = flickSwitch(arr);