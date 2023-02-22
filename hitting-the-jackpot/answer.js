testJackpot = arr => {
  if (!Array.isArray(arr) || 
       arr === undefined)
    return false;
  if (arr[0] !== arr[1] || 
      arr[1] !== arr[2] || 
      arr[2] !== arr[3])
    return false;
  return true;
}

const arr = 0;

document.getElementById('ans').textContent = testJackpot(arr);