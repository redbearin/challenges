peelLayerOff = arr => {
  const remTopBot = arr.slice(1, -1);
  const newArr= [];
  for (let i = 0; i < remTopBot.length; i++) {
    newArr.push(remTopBot[i].slice(1, -1));
  }
  return JSON.stringify(newArr);
}

const arr = [
  [true, false, true],
  [false, false, true],
  [true, true, true]
];

document.getElementById('ans').textContent = peelLayerOff(arr);