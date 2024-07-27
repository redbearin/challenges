cuttingGrass = (arr, ...cuts) => {
  let subArr;
  const history = [arr];
  for (let i = 0; i < cuts.length; i++) {
    subArr = [];
    if (history[i] === "Done") {
      history.push("Done");
      continue;
    }
    for (let j = 0; j < arr.length; j++) {
      if (history[i][j] - cuts[i] <= 0) {
        history.push("Done");
        break;
      }
      else  {
        subArr.push(history[i][j] - cuts[i]);
        if (j === arr.length - 1) {
          history.push(subArr);
        }
      }
    }
  }
  history.shift();
  return JSON.stringify(history);
}

const arr = [8, 9, 9, 8, 8];


document.getElementById('ans').textContent = cuttingGrass(arr, 2, 3, 2, 1);