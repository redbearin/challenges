const remap = (val, range1a, range1b, range2a, range2b) => {

  const percentGap = (val - range1a) / Math.abs(range1a - range1b);
  console.log(percentGap)
  return (percentGap * (range2High - range2Low)) + range2Low;

};

const val = 17;
const range1a = 5;
const range1b = 55;
const range2a = 100;
const range2b = 30;

document.getElementById('ans').textContent = remap(val, range1a, range1b, range2a, range2b);