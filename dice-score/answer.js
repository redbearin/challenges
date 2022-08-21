diceScore = rolls => {
  let points = 0;
  const onePtAll = {1: 100, 5: 50};
  const threePtAll = {1: 1000, 2: 200, 3: 300, 4: 400, 5: 500, 6: 600};
  const counts = {};
  // count each time a number appears
  for (let i = 0; i < rolls.length; i++) {
    if (counts[rolls[i]]) 
      counts[rolls[i]] = counts[rolls[i]] + 1;
    if (!counts[rolls[i]]) 
      counts[rolls[i]] = 1;
  }
  // go number by number thru counts object
  for (let num in counts) {
    // count of number is 3
    if (counts[num] === 3) {
      points += threePtAll[num];
    }
    // count of number is 1
    if (counts[num] === 1 && 
        num === '1' || num === '5') 
      points += onePtAll[num];
  }
  return points;
}

const rolls = [2, 4, 4, 5, 4];
document.getElementById('ans').textContent = diceScore(rolls);