sortByAnswer = numSents=> {
  let sentWAns = [];
  let num1 = '';
  let num2 = '';
  let operator = '';
  let spaceCount = 0;
  for (let i = 0; i < numSents.length; i++) {
    for (let j = 0; j < numSents[i].length; j++) {
      // space -- increment spaceCount and go to next element
      if (numSents[i][j] === ' ') {
        spaceCount++;
        continue;
      }
      // first number
      if (spaceCount === 0) 
        num1 += numSents[i][j];
      // operator
      if (spaceCount === 1)
        operator += numSents[i][j];
      // second number
      if (spaceCount === 2) 
        num2 += numSents[i][j];
    }
    if (operator === '+') 
      sentWAns.push([+num1 + +num2, numSents[i]]);
    else if (operator === '-') 
      sentWAns.push([+num1 - +num2, numSents[i]]);
    else if (operator === '*') 
      sentWAns.push([+num1 * +num2, numSents[i]]);
    else
      sentWAns.push([+num1 / +num2, numSents[i]]);
    // initialize numbers, space count, and operator
    num1 = '';
    num2 = '';
    operator = '';
    spaceCount = 0;
  }
  // sort based on answer
  sentWAns.sort((a, b) => a[0]-b[0]);
  // remove answers
  const sentOrdered = [];
  for (let i = 0; i < sentWAns.length; i++) {
    sentOrdered.push(sentWAns[i][1]);
  }
  return JSON.stringify(sentOrdered);
}
const numSents = ["2 + 2", "2 - 2", "2 * 1"];

document.getElementById('ans').textContent = sortByAnswer(numSents);