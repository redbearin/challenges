sortByCharacter = (arr, n) => {
  return JSON.stringify(arr.sort((a,b) => a[n - 1].localeCompare(b[n - 1])));
}
const arr = ["mate", "team", "bade"]
const n = 3;

document.getElementById('ans').textContent = sortByCharacter(arr, n);