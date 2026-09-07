testFairness = (agatha, bertha) => {
  let sumAg = 0
  let sumBer = 0
  for (let i = 0; i < agatha.length; i++) {
    sumAg += agatha[i][0] * agatha[i][1];
  }
  for (let i = 0; i < bertha.length; i++) {
    sumBer += bertha[i][0] * bertha[i][1];
  }
  if (sumAg === sumBer)
    return true;  
  return false;
}

const agatha = [[2, 2], [2, 2], [2, 2], [2, 2]];
const bertha = [[4, 4]];

document.getElementById('ans').textContent = testFairness(agatha, bertha);