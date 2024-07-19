mapping = arr => {
  const ltrPairs = {};
  for (let i = 0; i < arr.length; i++) {
    ltrPairs[arr[i]] = String.fromCharCode(arr[i].charCodeAt(0) - 32);
  }
  return JSON.stringify(ltrPairs);
}

const arr = ["p", "s"];

document.getElementById('ans').textContent = mapping(arr);