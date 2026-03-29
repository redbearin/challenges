possiblyPerfect = (arr1, arr2) => {
  let wrongCount = 0;
  let noCount = 0;
  let rightCount = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === '_') {
      noCount++;
    }
    else if (arr1[i] !== arr2[i]) {
      wrongCount++;
    }
    else {
      rightCount++;
    }
  }
  if (rightCount + noCount === arr1.length || 
      wrongCount + noCount === arr1.length) {
    return true;
  }
  return false;
}

const arr1 = ['B', '_', 'B'];
const arr2 = ['B', 'D', 'C'];

document.getElementById('ans').textContent = possiblyPerfect(arr1, arr2);

