billSplit = (foodType, cost) => {
  let you = 0;
  let friend = 0;
  for (let i = 0; i < cost.length; i++) {
    if (foodType[i] === "S") {
      you += cost[i]; 
    }
    else {
      you += cost[i]/2;
      friend += cost[i]/2;
    }
  }
  return JSON.stringify([you, friend]);
}

const foodType = ["S", "N"];
const cost = [41, 10];

document.getElementById('ans').textContent = billSplit(foodType, cost);