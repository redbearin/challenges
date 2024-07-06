changeTypes = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1) + '!';
    }
    if (typeof arr[i] === 'number') {
      if (arr[i] % 2 === 0) {
        arr[i] = arr[i] + 1;
      }
    }
    if (typeof arr[i] === "boolean") {
      if (arr[i] === true) {
        arr[i] = false;
      }
      else {
        arr[i] = true;
      }
    }
  }
  return JSON.stringify(arr)
}

const arr = ["a", 12, true];

document.getElementById('ans').textContent = changeTypes(arr);