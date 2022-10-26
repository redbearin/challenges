oddsVsEvens = num => {
  const numStr = num.toString();
  let oddTtl = 0;
  let evenTtl = 0;
  for (let i = 0; i < numStr.length; i++) {
    if (+numStr[i] % 2 === 0)
      evenTtl += +numStr[i];
    else
      oddTtl += +numStr[i];
  }
  if (evenTtl > oddTtl)
    return 'even';
  if (oddTtl > evenTtl)
    return 'odd';
  else
    return 'equal';
}

const num = 54870;

document.getElementById('ans').textContent = oddsVsEvens(num);