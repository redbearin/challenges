chooseFuse = (choices, partVoltage) => {
  const options = [];
  for (let i = 0; i < choices.length; i++) {
    choices[i] = +choices[i].slice(0, -1);
    if (choices[i] >= +partVoltage.slice(0,-1)) {
      options.push(choices[i]);
    }
  }
  options.sort((a,b) => a-b);
  return options[0] + 'V';
}

const choices = ["3V", "5V", "12V"];
const partVoltage = "4.5V";

document.getElementById('ans').textContent = chooseFuse(choices, partVoltage);