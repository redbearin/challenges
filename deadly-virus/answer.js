deadlyVirus = (persons, n) => {
  const row = persons.findIndex(arr => arr.includes('V'));
  const col = persons[row].findIndex(ele => ele === 'V');
  for (let i = 1; i <= n; i++) {
    // to left of cell
    if (col - i >= 0) {
      persons [row][col - i] = "V";
    }
    // to right of cell
    if (col + i <= persons[0].length) {
      persons [row][col + i] = "V";
    }
    if (row - i >= 0) {
      // above
      persons [row - i][col] = "V";
      // diagonal above left
      if (col - i >= 0) {
        persons[row - i][col - i] = "V";
      }
      // diagonal above right
      if (col + i <= persons[0].length) {
        persons[row - i][col + i] = "V";
      }
    }
    if (row + i <= persons.length - 1) {
      //below
      persons [row + i][col] = "V";
      //diagonal below left
      if (col - i >= 0) {
        persons[row + i][col - i] = "V";
      }
      //diagonal below right
      if (col + i <= persons[0].length) {
        persons[row + i][col + i] = "V";
      }
    }
  }
  return JSON.stringify(persons)
}

const persons = [
  ["P", "P", "P", "P", "P"],
  ["V", "P", "P", "P", "P"],
  ["P", "P", "V", "P", "P"],
  ["P", "P", "P", "P", "P"],
  ["P", "P", "P", "P", "P"]
];

const n = 2;

document.getElementById('ans').textContent = 
deadlyVirus(persons, n);