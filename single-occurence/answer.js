singleOccurrence = str => {
  if (str === "") {
    return "";
  }
  const counts = {};
  let letter;
  for (let i = 0; i < str.length; i++) {
    letter = str[i].toUpperCase();
    if (!counts[letter]) {
      counts[letter] = 1;
    }
    else {
      counts[letter] += 1;
    }
  }
  const sortedArr = Object.entries(counts).sort((a,b) => a[1] - b[1]);
  return sortedArr[0][0];
}
const str = "EFFEAABbc";

document.getElementById('ans').textContent = singleOccurrence(str);