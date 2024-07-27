alternatePosNeg = arr => {
  // arr has a 0
  if (arr.includes(0)) {
    return false;
  }

  // first element is negative
  if (arr[0] < 0) {
    for (let i = 0; i < arr.length; i++) {
      // index even, element should be negative
      if (i % 2 === 0) {
        if (arr[i] > 0)
          return false;
      }
      // index odd, element should be positive
      else {
        if (arr[i] < 0)
          return false;
      }
    } 
  }   

  // first element is positive
  else {
    for (let i = 0; i < arr.length; i++) {
      // index even, element should be positive
      if (i % 2 === 0) {
        if (arr[i] < 0)
          return false;
      }
      // index odd, element should be negative
      else {
        if (arr[i] > 0)
          return false;
      }
    }
  }
  return true;
}

const arr = [4, 4, -2, 3, -6, 10];

document.getElementById('ans').textContent = alternatePosNeg(arr);