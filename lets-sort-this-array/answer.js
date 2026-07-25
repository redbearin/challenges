ascDesNone = (arr, str) => {
  if (str === "Asc") {
    return JSON.stringify(arr.sort((a,b) => a-b));
  }
  if (str === "Des") {
    return JSON.stringify(arr.sort((a,b) => b-a));
  }
  return JSON.stringify(arr);
}

const arr = [1, 2, 3, 4];
const str = "None";

document.getElementById('ans').textContent = ascDesNone(arr, str);