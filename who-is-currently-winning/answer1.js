const currentlyWinning = arr => {
  const winners = [];
  let totalYou = 0;
  let totalOpp = 0;
  for (let i = 1; i < arr.length; i+=2) {
    totalOpp += arr[i];
    totalYou += arr[i - 1];
    if (totalYou > totalOpp) {
      winners.push('Y');
    }
    else if (totalOpp > totalYou) {
      winners.push('O');
    }
    else {
      winners.push('T'); 
    }
  }
  return JSON.stringify(winners);
};

const arr = [5, 15, 17, 35, 16, 40, 66, 12, 10, 9];
document.getElementById('ans').textContent = currentlyWinning(arr);