makeDetailedList = arr => {
  const insuranceSummary = {};
  let itemsAndValues;
  for (let i = 0; i < arr.length; i++) {
    itemsAndValues = {};
    for (let j = 0; j < arr[i][1].length; j++)  {
      itemsAndValues[arr[i][1][j]] = arr[i][2][j];
    }
    insuranceSummary[arr[i][0]] = itemsAndValues;
  }
  return JSON.stringify(insuranceSummary);
}

const arr = [
  ["basement", ["baseball bat"], [500] ],
  ["garage", ["horses", "cadillac", "flowers"], [110, 2000, 30]]
];

document.getElementById('ans').textContent = makeDetailedList(arr);