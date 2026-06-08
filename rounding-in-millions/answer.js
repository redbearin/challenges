millionsRounding = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] >= 500000) {
      arr[i][1] = Math.round(arr[i][1]/1000000) * 1000000;
    }
    else arr[i][1] = 0;
  }
  return JSON.stringify(arr);
}

const arr = [
  ["Nice", 942208],
  ["Abu Dhabi", 1482816],
  ["Naples", 2186853],
  ["Vatican City", 572]
];

document.getElementById('ans').textContent = millionsRounding(arr);