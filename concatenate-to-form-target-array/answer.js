canConcatenate = (arr, target) => {
  let combArr = arr[0];
  for (let i = 1; i < arr.length; i++) {
    combArr = combArr.concat(arr[i]);
  }

  return combArr.sort((a,b) => a-b).join('') === 
         target.sort((a,b) => a-b).join('') ?
         true :
         false;
}

const arr = [[1, 2, 3, 4], [7, 6], [5]];
const target = [1, 2, 3, 5, 4, 6, 7];

document.getElementById('ans').textContent = canConcatenate(arr, target);