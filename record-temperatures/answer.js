recordTemps = (records, currentWeek) => {
  for (let i = 0; i < currentWeek.length; i++) {
    if (currentWeek[i][0] < records[i][0]) {
      records[i][0] = currentWeek[i][0];
    }
    if (currentWeek[i][1] > records[i][1]) {
      records[i][1] = currentWeek[i][1];
    }
  }
  return JSON.stringify(records);
}

const records = [[34, 82], [24, 82], [20, 89],  [5, 88],  [9, 88], [26, 89], [27, 83]];
const currentWeek = [[44, 72], [19, 70], [40, 69], [39, 68], [33, 64], [36, 70], [38, 69]];

document.getElementById('ans').textContent = recordTemps(records, currentWeek);