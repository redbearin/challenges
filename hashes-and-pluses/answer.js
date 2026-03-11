hashPlusCount = str => {
  const counts = [0,0];
  for (let i = 0; i < str.length; i++) {
    str[i] === '#'?
    counts[0]++ :
    counts[1]++;
  }
  return JSON.stringify(counts);
}

const str = "##+++#";

document.getElementById('ans').textContent = hashPlusCount(str);