findBrokenKeys = (str1, str2) => {
  const brokenKeys = [];
  for (let i = 0; i < str1.length; i++) {
    if(str1[i] !== str2[i]) {
      brokenKeys.push(str1[i])
    }
  }
  return JSON.stringify([...new Set(brokenKeys)]);
}

const str1 = "beethoven";
const str2 = "affthoif5";

document.getElementById('ans').textContent = findBrokenKeys(str1, str2);