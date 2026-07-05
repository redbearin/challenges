const finalResult = arr => {
  // intializecomparative element to last element
  let nextElement = arr[arr.length - 1];
  // intialize to second index from end
  let i = arr.length - 2;
  // initial count of elements
  let count = 1;


  // there is an index
  while (i >= 0) {
    // elements match
    if (arr[i] === nextElement) {
      // increment the number elements
      count++;
      // first element
      // the element matches one or more next elements
      if (i === 0 && count > 1)
        // remove the matching elements
        arr.splice(i, count);
      i--;
    }
    // elements don't match
    else {
      // more than 1 matching
      if (count > 1) {
        // remove the matching elements
        arr.splice(i + 1, count);
        // element beyond matching element
        if (i !== arr.length - 1) {
          // make that element the next element
          nextElement = arr[i + 1];
        }
        // no elements beyond matching element
        else {
          // make current elment the next element
          nextElement = arr[i];
          // move back one element
          i--;
        }
        // reinitialize the number of similar elements 
        count = 1;
      }
      // no count
      else {
        // make current elment the next element
        nextElement = arr[i];
        // move back one element
        i--;
      }
    }
  }
  return JSON.stringify(arr);
} 

const arr = ["C", "A", "C"];

document.getElementById('ans').textContent = finalResult(arr); 