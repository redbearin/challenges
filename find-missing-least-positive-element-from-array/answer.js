getLeastPositiveElements = arr => {
  arr.sort((a,b) => a-b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >=0) {
      arr = [...new Set(arr.slice(i))];
      break;
    }
  }
  const missing = [];
  for (let num = arr[0]; num <= arr[arr.length -1]; num++) {
    if (arr.includes(num)) {
      continue;
    }
    else {
      missing.push(num);
    }
  }
  return JSON.stringify(missing);
}

const arr = [1, 8, 6, -1, -9, 1];

document.getElementById('ans').textContent = getLeastPositiveElements(arr);