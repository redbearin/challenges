digitalDivision = num => {
  // [digitsDiv, sumDiv, productDiv]
  const divDetails = [true, true, true];

  const strNum = num.toString();
 
  for (let i = 0; i < strNum.length; i++) {
    if(num % +strNum[i]) {
      divDetails[0] = false;
    }
  }

  let sum = 0;
  for (let i = 0; i < strNum.length; i++) {
    sum += +strNum[i];
  }
  if (num % sum) {
    divDetails[1] = false;
  }

  let product = 1;
  for (let i = 0; i < strNum.length; i++) {
    product *= +strNum[i];
  }
  if (num % product || product === 0) {
    divDetails[2] = false;
  }

  const testsPassed = divDetails.reduce((acc, item) => acc + item, 0);
  console.log(testsPassed)
  if (testsPassed === 3) {
    return  "Perfect";
  }
  if (testsPassed === 0) {
    return  "Indivisible";
  }
  else {
    return testsPassed;
  }
}

const num = 100;

document.getElementById('ans').textContent = digitalDivision(num);