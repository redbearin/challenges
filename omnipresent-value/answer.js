isOmnipresent = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].includes(num)) {
      return false;
    }
  }
  return true;
} 

const arr = [[1, 1], [1, 3], [5, 1], [6, 1]];
const num = 1;

document.getElementById('ans').textContent = isOmnipresent(arr, num); 