canAlternate = num => {
  const count0 = num.split('').sort().indexOf('1');
  if (count0 === -1)
    return false;
  const count1 = num.length - count0;
  if (count0 === count1 ||
      count1 - 1 === count0 ||
      count0 - 1 === count1)
    return true
  return false;
}

const num = "0000";

document.getElementById('ans').textContent = canAlternate(num);