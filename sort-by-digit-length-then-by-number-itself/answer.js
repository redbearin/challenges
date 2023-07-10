digitSort = arr => {
  const strArr = arr.map((num) => num.toString());

  const groupedByLen = {};

  for (let i = 0; i < strArr.length; i++) {
    if (groupedByLen[strArr[i].length]) {
      groupedByLen[strArr[i].length].push(+strArr[i]);
    }
    else {
      groupedByLen[strArr[i].length] = [+strArr[i]];
    }
  }

  const sortedEntries = Object.entries(groupedByLen).sort((a,b) => b[0] - a[0]);

  for (let i = 0; i < sortedEntries.length ; i++) {
    sortedEntries[i][1] = sortedEntries[i][1].sort((a,b) => a-b);
  }
  const sortedNumSubs = [];
  for (let i = 0; i < sortedEntries.length; i++) {
    sortedNumSubs.push(sortedEntries[i][1]);
  }
  return JSON.stringify(sortedNumSubs.flat());
}

const arr = [77, 23, 5, 7, 101];

document.getElementById('ans').textContent = digitSort(arr);

