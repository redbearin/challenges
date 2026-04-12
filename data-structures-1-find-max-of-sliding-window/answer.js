windowMaxes = (array, windowLength) => {
  let max;
  const windowMaxes = [];
  for (let i = 0; i < array.length - (windowLength - 1); i++) {
    max = array[i];
    for (let j = i + 1; j < i + windowLength; j++) {
      if (array[j] > max)
        max = array[j];
    }
   windowMaxes.push(max);
  }
  return JSON.stringify(windowMaxes);
}

const array = [1, 2, 3, 4, 3, 2, 1, 2, 5];
const windowLength = 3;

document.getElementById('ans').textContent = windowMaxes(array, windowLength);