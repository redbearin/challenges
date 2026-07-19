isSorted = (arr, str) => {
  for (let i = 0; i < arr[0].length; i++) {
    if (arr[0][i] !== arr[1][i]) {
      if (str.indexOf(arr[0][i]) < str.indexOf(arr[1][i])) {
        return true;
      }
      return false;
    }
  }
}

const arr = ["hello", "edabitlot"];
const str = "hlabcdefgijkmnopqrstuvwxyz";

document.getElementById('ans').textContent = isSorted(arr, str);