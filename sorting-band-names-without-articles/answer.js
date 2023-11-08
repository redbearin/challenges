bandNamesSort = bands => {
  let bandsAndComponents = [];
  // create array of subarrays
  // each subarray includes 1) array of words, 2) band name
  for (let i =0; i < bands.length; i++) {
    bandsAndComponents.push([bands[i].split(' '), bands[i]]);
  }
  // modify array of words to remove the, a, an
  for (let i = 0; i < bandsAndComponents.length; i++) {
    if (bandsAndComponents[i][0][0] === 'A' || 
        bandsAndComponents[i][0][0] === 'An' || 
        bandsAndComponents[i][0][0] === 'The')
      bandsAndComponents[i][0] = bandsAndComponents[i][0].slice(1);
  }
  // sort based on the first word after the, a, an removed
  bandsAndComponents.sort();
  // build an array that includes the complete
  // band names in the right order;
  const bandsSorted = [];
  for (let i = 0; i < newArr.length; i++) {
    bandsSorted.push(newArr[i][1]);
  }
  return JSON.stringify(bandsSorted);
};

const bands = ["But Myth", "An Old Dog", "Def Leppard", "The Any Glitters", "The Dawn"];

document.getElementById('ans').textContent = bandNamesSort(bands);