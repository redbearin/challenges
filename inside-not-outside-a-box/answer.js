count = arr => {
  let top, bot, lft, rt;
  let elements = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf('#') >= 0 && arr[i][arr[i].indexOf('#') + 1] === '#') {
      lft = arr[i].indexOf('#');
      top = i;
      for (let j = lft; j < arr[i].length; j++) {
        if (arr[i][j] !== '#') {
          rt = j - 1;
          break;
        }
        if (j === arr[i].length - 1) {
          rt = j;
        }
      }
      for (let j = top; j < arr.length; j++) {
        if (arr[j][lft] !== '#') {
          bot = j - 1;
          break;
        }
        if (j === arr.length - 1) {
          bot = j;
        }
      }
      break;
    }
  }
  for (let i = top + 1; i < bot; i++) {
    for (let j = lft + 1; j < rt; j++) {
      if (arr[i][j] !== " ") {
        elements.push(arr[i][j]);
      }
    }
  }
  return [...new Set(elements)].length;
}

const arr = [
  "#AAAAAABC",
  "AAA#####C",
  "ZAA#!%@#C",
  "AAA#####C",
  "#AAAAAABC"];

document.getElementById('ans').textContent = count(arr);