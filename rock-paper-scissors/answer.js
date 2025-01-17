calculateScore = games => {
  let abiCt = 0;
  let benCt = 0;
  for (let i = 0 ; i < games.length; i++) {
    if (games[i][0] === 'R') {
      if (games[i][1] === 'S') {
        abiCt++;
      }
      if (games[i][1] === 'P') {
        benCt++;
      }
    }
    if (games[i][0] === 'S') {
      if (games[i][1] === 'R') {
        benCt++;
      }
      if (games[i][1] === 'P') {
        abiCt++;
      }
    }
    if (games[i][0] === 'P') {
      if (games[i][1] === 'R') {
        abiCt++;
      }
      if (games[i][1] === 'S') {
        benCt++;
      }
    }
  }
  if (abiCt > benCt) {
    return "Abigail";
  }
  if (benCt > abiCt) {
    return "Benson";
  }
  return "Tie";
}

const games = [["R", "P"], ["R", "S"], ["S", "P"]];

document.getElementById('ans').textContent = calculateScore(games);