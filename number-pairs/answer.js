numberPairs = str => {
  const strArr = str.split(' ');
  const counts = {};
  let pairs = 0;
  for (let i = 1; i < strArr.length; i++) {
    if (counts[strArr[i]]) {
      if (counts[strArr[i]] % 2) {
        pairs++;
      }
      counts[strArr[i]]++;
    }
    else {
      counts[strArr[i]] = 1;
    }
  }
  return pairs;
}

const str = "9 10 20 20 10 10 30 50 10 20";

document.getElementById('ans').textContent = numberPairs(str);