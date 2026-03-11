determineWinnerOfFight = results => {
  let meRdsWon = 0;
  let spouseRdsWon = 0;
  let meCt, spouseCt;
  for (round in results) {
    meCt = 0;
    spouseCt = 0;
    meCt = results[round].me;
    spouseCt = results[round].spouse;
    if (meCt > spouseCt) {
      meRdsWon++;
    }
    if (meCt < spouseCt) {
      spouseRdsWon++;
    }
  }
  if (meRdsWon > spouseRdsWon) {
    return "ME!";
  }
  if (meRdsWon === spouseRdsWon) {
    return "NOBODY!";
  }
  return "SPOUSE!"
}

const results = {
  round1: {
    me: 10,
    spouse: 5,
  },
  round2: {
    me: 5,
    spouse: 20,
  },
  round3: {
    me: 10,
    spouse: 10,
  },
};

document.getElementById('ans').textContent = determineWinnerOfFight(results);