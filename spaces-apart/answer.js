const spaceApart = (arr) => {
  // make a copy of arr and sort
  const arrCopy = [...arr].sort((a,b) => a-b);
  // arr has a negative num 
  if (arrCopy[0] < 0)
    return 'invalid';
  // arr has no negative nums
  let count = 0;
  let sum = 0;
  // go element by element thru arr
  for (let i = 0; i < arr.length; i++) {
    // element is a "1"
    if (arr[i] === '1') {
      // increment '1' count
      count++;
      // more than 2 '1' in arr
      if (count > 2)
        return 'invalid'
    } 
    //  between the '1's
    else if (count === 1)
      sum += arr[i];
  }
  return sum;
};

const arr = [1, 0, 1, "1", 4, 3, 2, 3, 2, "1"];

document.getElementById("ans").textContent = spaceApart(arr);