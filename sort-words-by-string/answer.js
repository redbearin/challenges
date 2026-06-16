sortByString = (arr, str) => {
  const reordered = [];
  for (let i = 0; i < str.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      if (arr[j].startsWith(str[i])) {
        reordered.push(arr[j]);
      }
    }
  }
  return JSON.stringify(reordered);
}

const arr = ["apple", "banana", "cherry", "date"];
const str = "dbca";

document.getElementById('ans').textContent = sortByString(arr, str);