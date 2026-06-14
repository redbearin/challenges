widenStreets = (arr, n) => {
  const widenedStreets = [];
  let str;
  for (let i = 0; i < arr.length; i++) {
    str = '';
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === ' ' && 
          (arr[i][j - 1] !== ' ' || 
          arr[i][j + 1] !== ' ')) {
          str += ' '.repeat(n);
      }  
      else {
        str += arr[i][j];
      }
    }
    widenedStreets.push(str);
  }
  return widenedStreets;
}

const arr = [
  "###   ## #",
  "### # ## #",
  "### # ## #",
  "### # ## #",
  "### # ## #"
];
const n = 3;

document.getElementById('ans').textContent = widenStreets(arr, n);