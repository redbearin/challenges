const incrementalDepth = arr => {
  // add most nested element
  let nested = [arr[arr.length - 1]];
  // nest
  for (let i = arr.length - 2; i >= 0; i--) {
    nested = [arr[i], nested];
  }
  return JSON.stringify(nested);
}

let arr = ["dog", "cat", "cow"];

document.getElementById('ans').textContent = incrementalDepth(arr);