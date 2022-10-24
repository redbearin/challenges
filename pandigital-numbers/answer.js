const isPandigital = num => {
  const strNum = num.toString();
  const numArr = strNum.split('');
  const noDups = [... new Set (numArr)];
  if (noDups.length === 10) 
    return true;
  return false;
}
let num = BigInt(112233445566778899);

document.getElementById('ans').textContent = isPandigital(num);