const getXP = probs => {
  return probs['Very Easy'] * 5 +
         probs.Easy * 10 +
         probs.Medium * 20 +
         probs.Hard * 40 +
         probs['Very Hard'] * 80 + 'XP';
};

const probs = {
  "Very Easy" : 11,
  "Easy" : 0,
  "Medium" : 2,
  "Hard" : 0,
  "Very Hard" : 27
};

document.getElementById('ans').textContent = getXP(probs);