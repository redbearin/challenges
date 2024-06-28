junctionOrSelf = num => {
  let numStr, total;
  const juntions = [];
  // num only one digit
  if (num.toString().length === 1)
    return "Self";
  // go number by number from top
  // check to see if junction
  for (let i = num - 1; i > 9; i--) {
    // initialiize with number
    total = i;
    // break number into a string
    numStr = i.toString();
    // add digits to base number
    for (let j = 0; j < numStr.length; j++) {
      total += +numStr[j];
    }
    // total of number and digits = to starting num
    if (total === num)
      juntions.push(i);
  }
  return JSON.stringify(juntions);
}

const num = 9;

document.getElementById('ans').textContent = junctionOrSelf(num);