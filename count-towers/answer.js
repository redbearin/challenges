countTowers = matrix => {
  const indices = [];
  let str;
  // go through matrix element by element
  for (let i = 0; i < matrix.length; i++) {
    str = matrix[i][0];
    for (let j = 0; j < str.length; j += 5) {
      // indices does not include that index
      // and a #
      if (str[j] === "#"  && !indices.includes(j)) {
        // add the index to indices array
        indices.push(j);
        // once you reach max stop processing
        if (Math.floor(str.length/4) === indices.length)
          return indices.length;
      }
    }
  }
  // return the numnber of indices (number of towers)
  return indices.length;
}

const matrix = [
  ["                         ##"],
  ["##             ##   ##   ##"],
  ["##        ##   ##   ##   ##"],
  ["##   ##   ##   ##   ##   ##"]
];

document.getElementById('ans').textContent = countTowers(matrix);