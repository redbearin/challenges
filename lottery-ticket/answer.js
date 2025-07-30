lottery = (arr, num) => {
  let ct = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][0].charCodeAt(j) === arr[i][1]) {
        ct++;
        break;
      }
    }
    if (ct === num) {
      return "Winner!";
    }
  }
  return "Loser!";
}

const arr = [["KG", 80], ["NTBBVZ", 79], ["CI", 73], ["AGXMEE", 74], ["IU", 68], ["VOSP" , 84]];
const num = 1;

document.getElementById('ans').textContent = lottery(arr, num);