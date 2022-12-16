ohmsLaw = (v, r, i) => {
  const arr = [v, r, i];
  // determine if the problem follows
  // criteria of one blank
  let blankCount = 0;
  for (let i = 0; i < 3; i++) {
    if (arr[i] === '')
      blankCount++;
  }
  if (blankCount > 1 || blankCount < 1)
    return "Invalid";

  // follows criteria for blanks
  let answer;
  // solve depending on placement of blank
  if (arr[0] === '') 
    answer = arr[1] * arr[2];
  else if (arr[1] === '')
    answer = arr[0] / arr[2];
  else
    answer = arr[0] / arr[1]; 
  if (Number.isInteger(answer))   
    return answer;
  else
    return answer.toFixed(2);
}

const v = "";
const r = "";
const i = 10;

document.getElementById('ans').textContent = ohmsLaw(v, r, i);