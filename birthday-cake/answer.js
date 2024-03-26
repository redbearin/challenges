getBirthdayCake = (person, age) => {
  let char;
  age % 2 ? char = '*' : char = '#';
  
  const message = char + ' ' + age + " Happy Birthday " + person + '! ' + age + ' ' + char;

  return JSON.stringify([char.repeat(message.length), message, char.repeat(message.length)]);
}

const person = "Russell";
const age = 19;

document.getElementById('ans').textContent = getBirthdayCake(person, age);

