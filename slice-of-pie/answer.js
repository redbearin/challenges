equalSlices = (slices, recip, numEach) => recip * numEach <= slices;

const slices = 8;
const recip = 3;
const numEach = 2;

document.getElementById('ans').textContent = equalSlices(slices, recip, numEach);