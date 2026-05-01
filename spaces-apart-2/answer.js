const spaceApart = (arr) => {
  let str1Count = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0)
      return 'invalid';
    // element is a "1"
    if (arr[i] === '1') {
      // increment '1' str1Count
      str1Count++;
      // more than 2 '1' in arr
      if (str1Count > 2)
        return 'invalid';
    } 
    //  between the '1's
    else if (str1Count === 1 &&
             Number.isInteger(arr[i]))
      sum += arr[i];
  }
  if (str1Count < 2)
    return "invalid";
  return sum;
};

const arr = [4, 3, "1", "2", 4, "1", "2", "9"];

document.getElementById("ans").textContent = spaceApart(arr);