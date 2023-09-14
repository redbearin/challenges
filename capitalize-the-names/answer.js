capMe = arr => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
  }
  return JSON.stringify(arr);
}
const arr = ["samuel", "MABELLE", "letitia", "meridith"];

document.getElementById('ans').textContent = capMe(arr);