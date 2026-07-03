maxScore = str => {
  let biggest = 0;
  let count;
  for (let i = 1; i < str.length; i++) {
    count = str.slice(0,i).match((/0/g) || []).length + 
            str.slice(i).match((/1/g) || []).length;
    if (count > biggest) {
      biggest = count;
    }
  }
  return biggest;
}

const str = "00111";

document.getElementById('ans').textContent = maxScore(str);