billSplit = (spicy, prices) => {
  let youTtl = 0;
  let friendTtl = 0;
  for (let i = 0; i < spicy.length; i++) {
    if (spicy[i] === "N") {
      youTtl += prices[i]/2;
      friendTtl += prices[i]/2;
    }
    else {
      youTtl += prices[i];
    }
  }
  return JSON.stringify([youTtl, friendTtl]);
}

const spicy = ["N", "S", "N"];
const prices = [10, 10, 20];

document.getElementById('ans').textContent = billSplit(spicy, prices);