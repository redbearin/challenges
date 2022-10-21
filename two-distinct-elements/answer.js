returnUnique = arr => {  
  let counts = {};
  // create an object that holds all the counts
  // of each number
  for (let i = 0; i < arr.length; i++) {
    if (counts[arr[i]])
      counts[arr[i]] += 1;
    else 
      counts[arr[i]] = 1;   
  }
  // array to hold distinct elements and their indices
  let distinct = [];
  // go element by element thru
  // counts object and add the distinct elements 
  // index to distinct array
  for (let key in counts) {
    if (counts[key] === 1)
      distinct.push([+key, arr.indexOf(+key)]);
  }
  // sort by index
  distinct.sort((a, b) => a[1] - b[1]);
  // create a new array that only includes the distinct
  // elements (get rid of indices)
  const distictElements = [];
  for (let i = 0; i < distinct.length; i++) {
    distictElements.push(distinct[i][0]);
  }
  return JSON.stringify(distictElements);
};

const arr = [9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8];

document.getElementById('ans').textContent = returnUnique(arr);