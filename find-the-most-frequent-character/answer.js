mostFrequent = str => {
  if (!str.length) return null;
  const counts = {};
  for (const char of str) {
    counts[char] = (counts[char] || 0) + 1;
  }
  const arr = Object.entries(counts).sort((a,b) => b[1] - a[1]);
  const indices = [str.indexOf(arr[0][0])];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][1] !== arr[i - 1][1]) {
      break;
    }
    indices.push(str.indexOf(arr[i][0]));
  }
  return str[indices.sort((a,b) => a - b)[0]];
}

const str = "11222!!";

document.getElementById('ans').textContent = mostFrequent(str);