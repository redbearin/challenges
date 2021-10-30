const encryption = str => {
  // create memory location for string with no spaces
  let noSpaceStr;
  // str includes spaces
  if (str.split('').includes(' ')) {
    noSpaceStr = '';
    // remove spaces from str
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== ' ')
        noSpaceStr += str[i];
    }
  }
  // no spaces
  else
    noSpaceStr = str;
  

  // number of columns (or length of each row)
  const numCols = Math.ceil(Math.sqrt(noSpaceStr.length));
  // initialize array to hold rows
  const rows = [];
  // create memory for row
  let row;

  // noSpaceStr has length
  while (noSpaceStr.length) {
    // initialize substring
    let row = '';
    for (let i = 0; i < numCols; i++) {
      // reached an place where there is no character
      // (last row)
      if (noSpaceStr[i] === undefined)
        break;
      // add the character to row
      row += noSpaceStr[i];
    }
    // add row to rows array
    rows.push(row);
    // remove the elements in the row from the noSpaceStr
    noSpaceStr = noSpaceStr.slice(numCols);
  }
  // create memory for encrypted array
  const encrypted = [];
  // create member for encrypted groupings
  let grouping;
  // go column by column
  for (let colIdx = 0; colIdx < numCols; colIdx++) {
    grouping = '';
    // go row by row
    for (let rowIdx = 0; rowIdx < rows.length; rowIdx++) {
      // reached an position with no character
      if (rows[rowIdx][colIdx] === undefined)
        break;
      // add character to grouping
      grouping += rows[rowIdx][colIdx];
    }
    // add the grouping to encrypted array
    encrypted.push(grouping);
  }
  // return the encrypted string (with spaces)
  return encrypted.join(' ');
};

const str = "if man was meant to stay on the ground god would have given us roots";

document.getElementById('ans').textContent = encryption(str);