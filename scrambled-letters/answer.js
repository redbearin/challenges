scrambled = (arr, mask) => {
  const candidates = arr.filter(word => word.length === mask.length);
  const meetCriteria = [];
  for (let i = 0; i < candidates.length; i++) {
    for (let j = 0; j < candidates[i].length; j++) {
      if (mask[j] !== candidates[i][j] && 
          mask[j] !== '*') {
        break;
      }
      if (j === candidates[i].length - 1) 
        meetCriteria.push(candidates[i]);
    }
  }
  return JSON.stringify(meetCriteria);
}
const arr = ["red", "dee", "cede", "reed", "creed", "decree"];
const mask = "***";

document.getElementById('ans').textContent = scrambled(arr, mask);