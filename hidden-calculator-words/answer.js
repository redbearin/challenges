turnCalc = num => {
  const strNum = num.toString().replace('.', "");
  const key = {1: "I", 2: "Z", 3: "E", 4: "H", 5: "S", 6: "G", 7: "L", 8: "B", 9: "-", 0: "O"};
  let word = "";
  for (let i = strNum.length - 1; i >= 0; i--) {
		
    word += key[strNum[i]];
  }
  return word;
}

const num = 707;

document.getElementById('ans').textContent = turnCalc(num);