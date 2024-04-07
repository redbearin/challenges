nearestVowel = s => {
  const ltrCode = s.charCodeAt(0);
  const vowelCodes = [['a', 97], ['e', 101], ['i', 105], ['o', 111], ['u', 117]];
  let distance = Infinity;
  let nearestVowel;
  for (let i = 0;  i < vowelCodes.length; i++) {
    if (Math.abs(vowelCodes[i][1] - ltrCode) < distance) {
      distance = Math.abs(vowelCodes[i][1] - ltrCode);
      nearestVowel = vowelCodes[i][0];
    }
    if (Math.abs(vowelCodes[i] - ltrCode) > distance)
      break;
  }
  return nearestVowel;
}
const s = "i";

document.getElementById('ans').textContent = nearestVowel(s);