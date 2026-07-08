timeSum = arr => {
  let hr = 0;
  let min = 0;
  let sec = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 7) {
      hr += +arr[i].slice(0,1)
      min += +arr[i].slice(2, 4);
      sec += +arr[i].slice(5);
    }
    else {
      hr += +arr[i].slice(0,2);
      min += +arr[i].slice(3, 5);
      sec += +arr[i].slice(6);
    }
  }
  min += Math.floor(sec /60);
  sec = sec % 60;
  hr += Math.floor(min/60);
  min = min % 60;
  return JSON.stringify([hr, min, sec]);
}

const arr = ['10:39:35', '11:33:23', '2:34:52', '9:17:09', '4:41:57', '3:34:19', '1:31:26', '4:06:01'];

document.getElementById('ans').textContent = timeSum(arr);