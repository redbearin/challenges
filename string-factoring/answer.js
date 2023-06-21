const stringFactor = arr => {
  // counts of each number
  const counts = {};
  // each number and power
  let elements = [];
  // add numbers and counts to counts obj
  for (let i = 0; i < arr.length; i++) {
    if (counts[arr[i]])
      counts[arr[i]] += 1;
    else
      counts[arr[i]] = 1;
  }
  // go number by number is counts object
  for (num in counts) {
    // only 1 or a number
    if (counts[num] === 1) 
      elements.push(num);
    // more than 1 of a number
    else
      elements.push(num + '^' + counts[num]);
  }
  return elements.join(' x ');
}
const arr = [2, 3, 3];
document.getElementById('ans').textContent = stringFactor(arr);