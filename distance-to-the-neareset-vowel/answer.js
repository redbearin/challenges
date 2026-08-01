distanceToNearestVowel = str => {
const vwlIdx = [];
const dist = [];
  for (let i = 0; i < str.length; i++) {
    if (/([aeiouAEIOU])/.test(str[i])) {
      vwlIdx.push(i);
    }
  }
  for (let i = 0; i < str.length; i++) {
    dist.push(Math.abs(i - vwlIdx.sort((a, b) => Math.abs(i - a) - Math.abs(i - b) )[0]));
  }
  return JSON.stringify(dist);
}

const str = "abcdabcd"

document.getElementById('ans').textContent = distanceToNearestVowel(str);