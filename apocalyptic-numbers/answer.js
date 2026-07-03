const apocalyptic = num => {
  let numStr;
  if (num > 53)
    numStr = "" + BigInt(Math.pow(2, num));
  else
    numStr = "" + Math.pow(2, num);
  // go number by number through numStr
  for (let i = 0; i < numStr.length - 2; i++) {
    // triplet of 6s
    if (numStr[i] === '6' & numStr[i+1] === '6' &&  numStr[i+2] === '6')
      return "Repent! " + i + " days until the Apocalypse!"
  }
  // no triplet of 6s
  return "Crisis averted. Resume sinning.";
}
const num = 220;
document.getElementById('ans').textContent = apocalyptic(num);