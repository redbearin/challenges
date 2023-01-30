hasConsecutiveSeries = (arr1, arr2) => {
  // set longest and shortest arrays
  let longerArr;
  let shorterArr;
  if (arr1.length > arr2.length) {
    longerArr = arr1;
    shorterArr = arr2;
  }
  else {
    longerArr = arr2;
    shorterArr = arr1;
  }
  // create a combined array that includes sum 
  // of numbers in each position of two arrays
  let combined = [];
  for (let i = 0; i < longerArr.length; i++) {
    if (shorterArr[i] === undefined) {
      combined = combined.concat(longerArr.slice(i));
      break;
    }
    else
      combined.push(longerArr[i] + shorterArr[i]);
  }
  // determine if combined array is a consequtive
  // sequence
  for (let i =1; i < combined.length; i++) {
    if (combined[i] - 1 !== combined[i-1])
      return false;
  }
  return true;
}

const arr1 = [12, 3];
const arr2 = [0, 10, 14, 15, 16];

document.getElementById('ans').textContent = hasConsecutiveSeries(arr1, arr2);