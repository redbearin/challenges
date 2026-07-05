printArray = number => {
  const newArray = [];
  for(var i = 1; i <= number; i++) {
    newArray.push(i);
  }
  return JSON.stringify(newArray);
}

const number = 3;

document.getElementById('ans').textContent = printArray(number);