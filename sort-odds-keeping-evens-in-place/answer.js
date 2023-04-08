oddSort = arr => {
  let odds = [];
  let oddsIdx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2) {
      odds.push(arr[i]);
    }
  }
  odds.sort();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2) {
      arr[i] = odds[oddsIdx];
      oddsIdx++;
    }
  }
  return JSON.stringify(arr);
}

const arr = [7, 5, 2, 3, 1];

document.getElementById('ans').textContent = oddSort(arr);

