leaderboards = arr => {
  for (let i = 0; i < arr.length; i++) {
    arr[i]['total'] = arr[i].score + arr[i].reputation * 2;
  }
  arr.sort((a, b) => b.total - a.total);
  for (let i = 0; i < arr.length; i++) {
    delete arr[i].total;
  }
  return JSON.stringify(arr);
}

const arr = [
  { name: "a", score: 100, reputation: 20 },
  { name: "b", score: 90, reputation: 40 },
  { name: "c", score: 115, reputation: 30 },
];

document.getElementById('ans').textContent = leaderboards(arr);