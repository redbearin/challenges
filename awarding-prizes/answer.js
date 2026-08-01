awardPrizes = (names) => {
  sortedNamesArr = Object.entries(names).sort((a,b) => b[1] - a[1]);
  names[sortedNamesArr[0][0]] = "Gold";
  names[sortedNamesArr[1][0]] = "Silver";
  names[sortedNamesArr[2][0]] = "Bronze";
  for (let i = 3; i < sortedNamesArr.length; i++) {
    names[sortedNamesArr[i][0]] = "Participation";
  }
  return JSON.stringify(names);
}

const names = {
  "Mario" : 99,
  "Luigi" : 100,
  "Yoshi" : 299,
  "Toad" : 2
};

document.getElementById('ans').textContent =  awardPrizes(names);