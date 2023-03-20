battleOutcome = num => {
  // convert numberic num to str num
  const numStr = num.toString();
  let outcome = '';
  // go every two digits thru num
  for (let i = 0; i < numStr.length; i += 2) {
    // last digit or first digit bigger than second
    if (numStr[i + 1] === undefined || 
        +numStr[i] > +numStr[i + 1])
      outcome += numStr[i];
    // second digit bigger
    else if (+numStr[i] < +numStr[i + 1])
      outcome += numStr[i + 1];
  } 
  return +outcome;
}
const num = 78925;

document.getElementById('ans').textContent = battleOutcome(num);