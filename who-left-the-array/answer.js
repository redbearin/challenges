const missing = (arr1, arr2) => {
  let longest, shortest, index;
  // determine longest and shortest arrays
  if (arr1.length > arr2.length) {
    longest = arr1;
    shortest = arr2;
  }
  else {
    longest = arr2;
    shortest = arr1;
  }
  // go element by element through longest array
  for (let i = 0; i < longest.length; i++) {
    // find the index of the matching element
    // in shorter array
    index = shortest.indexOf(longest[i])
    // no match (missing element)
    if (index === -1)
      return longest[i];
    // match, mark the element as matched
    shortest[index] = '*';
  }
};

const arr1 = ["Jane", "is", "pretty", "ugly"]; 
const arr2 = ["Jane", "is", "pretty"];

document.getElementById('ans').textContent = missing(arr1, arr2);