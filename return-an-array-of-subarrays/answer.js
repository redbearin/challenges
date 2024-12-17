matrix = (numSubs, numItems, item) => {
  const arr = [];
  let sub;
  for (let i = 0; i < numSubs; i++) {
    sub = [];
    for (let j = 0; j < numItems; j++) {
      sub.push(item);
    }
    arr.push(sub);
  }
  return JSON.stringify(arr);
}

const numSubs = 3;
const numItems = 2;
const item = 3;

document.getElementById('ans').textContent = matrix(numSubs, numItems, item);