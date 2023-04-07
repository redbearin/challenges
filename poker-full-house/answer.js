isFullHouse = cards => {
  const cardCounts = {};
  // build card count object
  for (let i = 0; i < cards.length; i++) {
    if (cardCounts[cards[i]])
      cardCounts[cards[i]] = cardCounts[cards[i]] + 1;
    else
      cardCounts[cards[i]] = 1;
  }
  cardCountsArr = Object.entries(cardCounts);
  // more or less than two card types
  if (cardCountsArr.length !== 2)
    return false;
  // two of one card, three of another
  if (cardCountsArr[0][1] === 2 && cardCountsArr[1][1] === 3 ||
    cardCountsArr[0][1] === 3 && cardCountsArr[1][1] === 2)
    return true;
  return false;
}

const cards = ["7", "J", "3", "4", "2"];

document.getElementById('ans').textContent = isFullHouse(cards);