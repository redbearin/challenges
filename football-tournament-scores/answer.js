tournamentScores = arr => {
  let sub;
  
  for (let i = 0; i < arr.length; i++) {
    sub = arr[i].split(' ');
  }
}
const arr = ["A 0 - 1 B", "C 2 - 0 D", "B 2 - 2 C", "D 3 - 1 A", "A 2 - 2 C", "B 2 - 0 D"];

document.getElementById('ans').textContent = tournamentScores(arr);