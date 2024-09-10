const currentlyWinning = arr => {
  const winners = [];
  // hop every other element through array
  // and compare to prior element
  for (let i = 1; i < arr.length; i += 2) {
    if (arr[i] > arr[i - 1])
      winners.push('O');
    else if (arr[i] < arr[i - 1])
      winners.push('Y'); 
    else  
      winners.push('T'); 
  }
  return JSON.stringify(winners);
};

const arr = [10, 10, 5, 5, 2, 2, 1, 3, 100, 5];
document.getElementById('ans').textContent = currentlyWinning(arr);