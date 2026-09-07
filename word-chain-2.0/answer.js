isWordChain = arr => {
  let diff, idxRt, idxLt;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length === arr[i-1].length ||
      arr[i-1].length + 1 === arr[i].length ||
      arr[i-1].length - 1 === arr[i].length) {
      // words the same length
      if (arr[i].length === arr[i-1].length) {
        diff = 0;
        for (let j = 0; j < arr[i].length; j++) {
          if (arr[i][j] !== arr[i-1][j]) {
            if (diff === 1) {
              return false;
            }
            diff++;
          }
        }
      }
      // left is shorter
      if (arr[i-1].length + 1 === arr[i].length) {
        idxRt = 0; //arr[i]
        idxLt = 0; //arr[i - 1]
        while (idxRt < arr[i].length) {
          if (arr[i][idxRt]===arr[i-1][idxLt]) {
            idxRt++;
            idxLt++;
          }
          else {
            idxRt++;
            if (arr[i][idxRt]===arr[i-1][idxLt]) {
              idxRt++;
              idxLt++;
            }
            else {
              return false;
            }
          }
        }
      }
      // right is shorter
      if (arr[i-1].length - 1 === arr[i].length) {
        idxRt = 0; //arr[i]
        idxLt = 0; //arr[i - 1]
        while (idxLt < arr[i-1].length) {
          if (arr[i][idxRt]===arr[i-1][idxLt]) {
            idxRt++;
            idxLt++;
          }
          else {
            idxLt++;
            if (arr[i][idxRt]===arr[i-1][idxLt]) {
              idxRt++;
              idxLt++;
            }
            else {
              return false;
            }
          }
        }
      }
    }
    else {
      return false;
    }
  }
  return true;
}

const arr = ["run", "runny", "bunny"]

document.getElementById('ans').textContent = isWordChain(arr);