isFullHouse = cards => {
  const counts = {};

  for (let i = 0; i < cards.length; i++) {
    counts[cards[i]] ?
    counts[cards[i]] += 1 :
    counts[cards[i]] = 1;
  }

  const countsArr = Object.entries(counts);

  if (countsArr.length !== 2) {
    return false;
  }

  return countsArr[0][1] === 2 && countsArr[1][1] === 3 ||
         countsArr[0][1] === 3 && countsArr[1][1] === 2 ?
    true :
    false;
}

const cards = ["A", "A", "A", "K", "K"];

document.getElementById('ans').textContent = isFullHouse(cards);