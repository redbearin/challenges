direction = arr => {
  const ltrs = ['e', 'a', 'E', 'A'];
  const switchLtrs = {e: "w", a: "e", E: "W", A: "E"};
  let newArr = [];
  let word;
  for (let i = 0; i < arr.length; i++) { 
    word ='';
    for (let j = 0; j < arr[i].length; j++) {
      if (ltrs.includes(arr[i][j])) {
        word += switchLtrs[arr[i][j]];
      }
      else {
        word += arr[i][j];
      }
    }
    newArr.push(word);
  }
  return JSON.stringify(newArr);
}

const arr = ["eAsT EaSt", "EaSt eAsT"];

document.getElementById('ans').textContent = direction(arr);