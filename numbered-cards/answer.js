winRound = (arr1, arr2) => {
  arr1.sort((a,b) => b-a);
  arr2.sort((a,b) => b-a);
  return +(arr1[0].toString() + arr1[1].toString()) > +(arr2[0].toString() + arr2[1].toString()) ?
  true :
  false;
}

const arr1 = [2, 5, 2, 6, 9];
const arr2 = [3, 7, 3, 1, 2];

document.getElementById('ans').textContent = winRound(arr1, arr2);