treePhotography = arr => {
  let countLt = 0;
  let countRt = 0;
  let curLt = arr[0];
  let curRt = arr[arr.length - 1];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > curLt) {
      curLt = arr[i];
      countLt++;
    }
  }
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > curRt){
      curRt = arr[i];
      countRt++;
    }
  }
  
  return countLt > countRt?
  'left':
  'right';
}

const arr = [5, 6, 5, 4];

document.getElementById('ans').textContent = treePhotography(arr);