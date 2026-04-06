pluralize = arr => {
  const newArr = [];
  let idx;
  for (let i = 0; i < arr.length; i++) {
    if (newArr.includes(arr[i] + 's')) {
      continue;
    }
    idx = newArr.indexOf(arr[i]);
    if(idx === -1) {
      newArr.push(arr[i]);
    } 
    else {
      newArr[idx] = arr[i] + "s";
    }
  }
  return JSON.stringify(newArr);
}

const arr = ["cow", "pig", "cow", "cow"];

document.getElementById('ans').textContent = pluralize(arr);