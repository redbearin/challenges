getNotesDistribution = arr => {
  const counts = {};
  let scores;
  for (let i = 0; i < arr.length; i++) {
    scores = arr[i].notes;
    for (let j = 0; j < scores.length; j++)
    if (scores[j] < 6 && 
        scores[j] > 0) {
          counts[scores[j]] ?
          counts[scores[j]]++ :
          counts[scores[j]] = 1;
    }
  }
  return JSON.stringify(counts);
}

const arr = [
  {
    "name": "Steve",
    "notes": [5, 5, 3, -1, 6]
  },
  {
    "name": "John",
    "notes": [3, 2, 5, 0, -3]
  }
];

document.getElementById('ans').textContent = getNotesDistribution(arr);