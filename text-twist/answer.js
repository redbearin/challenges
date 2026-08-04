totalPoints = (words, sixLtr) => {
  let sub, idx;
  const points = {3: 1, 4: 2, 5: 3, 6: 54}
  let sum = 0;
  for (let i = 0; i < words.length; i++) {
    sub = sixLtr.split('');
    console.log(sub)
    flag = false;
    for (let j = 0; j < words[i].length; j++) {
      if (words.length < 3) {
        break;
      }
      idx = sub.indexOf(words[i][j]);
      if (idx === -1) {
        flag = true;
        break;
      }
      sub[idx] = "*";
    }
    if (!flag) {
      sum += points[words[i].length];
    }
  }
  return sum;
}

const words =  ["trance", "recant"];
const sixLtr = "recant";

document.getElementById('ans').textContent = totalPoints(words, sixLtr);
