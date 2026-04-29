chooseFuse = (fuzeChoices, deviceOutput) => {
  let choice;
  let difference = Infinity;
  let numericChoice; 
  let numericOutput;
  for (let i = 0; i < fuzeChoices.length; i++) {
    numericChoice = +fuzeChoices[i].slice(0, -1);
    numericOutput = +deviceOutput.slice(0, -1)
    if (numericChoice > numericOutput && 
        numericChoice - numericOutput  < difference) {
      choice = fuzeChoices[i];
      difference = numericChoice - numericOutput;
    }
  }
  return choice;
}

const fuzeChoices = ["17V", "15V", "12V"];
const deviceOutput= "9V";

document.getElementById('ans').textContent = chooseFuse(fuzeChoices, deviceOutput);