sockMerchant = socks => {
  let counts = {};
  for (let i = 0; i < socks.length; i++) {
    counts[socks[i]] ?
    counts[socks[i]] += 1 :
    counts[socks[i]] = 1;
  }
  const countsArr = Object.entries(counts);
  let pairs = 0;
  for (let i = 0; i< countsArr.length; i++) {
    pairs += Math.floor(countsArr[i][1] / 2);
  }
  return pairs;
}

const socks = [10, 20, 20, 10, 10, 30, 50, 10, 20];

document.getElementById('ans').textContent = sockMerchant(socks);