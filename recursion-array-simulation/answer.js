recurAdd = arr => {
if (arr.length <= 1) {
    if (!arr.length) {
      return 0;
    }
    return arr[0];
  } 
  else {
    return arr[0] + recurAdd(arr.slice(1));
  }
}

const arr = [];

document.getElementById('ans').textContent = recurAdd(arr);