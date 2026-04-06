
isTriplet = (n1, n2, n3) => {
  sortNums = [n1, n2, n3].sort((a, b) => a - b);
  if (Math.pow(sortNums[0], 2) + 
      Math.pow(sortNums[1], 2) === 
      Math.pow(sortNums[2], 2))
    return true;
  return false; 
}

const n1 = 13;
const n2 = 5;
const n3 = 12;

document.getElementById('ans').textContent = isTriplet(n1, n2, n3);


