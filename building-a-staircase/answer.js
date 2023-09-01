const buildStaircase = (height, bldgBlk) => {
  // number of rows and columns are the same
  // so height and width are the same
  let stepsIdxs = 0;
  let staircase = [];
  let row;
  // row by row
  for (let i = 0; i < height; i++) {
    row = [];
    // index by index in the row
    for (let j = 0; j < height; j++) {
      // index <= number of step indices
      if (j <= stepsIdxs) 
        row.push(bldgBlk);
      // index > number of step indices
      else
      row.push('_');
    }
    // add row to staircase
    staircase.push(row);
    // increment number of step indices
    stepsIdxs++;
  }
  return JSON.stringify(staircase);
};

const height = 3;
const bldgBlk = "A";

document.getElementById('ans').textContent = buildStaircase(height, bldgBlk); 