const countLoneOnes = num => {
  const numStr = num.toString();
  // number of ones together
  let onesInBlock = 0;
  // number lone 1s
  let loneCount = 0;
  // go through str number digit by digit
  for (let i = 0; i < numStr.length; i++) {
    // digit is 1
    if (numStr[i] === '1') {
      // increment the 1s in the block
      onesInBlock++;
      // last digit and one 1 in block
      if (i === numStr.length - 1 && onesInBlock === 1)
        loneCount++;
    // digit isn't a 1
    else {
      // there is a one in block
      if (onesInBlock) {
        // block includes only one 1
        if (onesInBlock === 1)
          loneCount++;
        // reset block counter
        onesInBlock = 0;
      }
    }
  }
  return loneCount;
};

const num = 462;

document.getElementById('ans').textContent = countLoneOnes(num);