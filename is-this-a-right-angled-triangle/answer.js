rightTriangle = (s1, s2, s3) => {
  // create array of sides and sort
  const sortedArr = [s1, s2, s3].sort((a,b) => a - b);
  // squares of shortest sides === square of longest side
  if (Math.pow(sortedArr[0], 2) + 
      Math.pow(sortedArr[1], 2) === 
      Math.pow(sortedArr[2], 2))
    return true;
  else
    return false;
}

const s1 = 70;
const s2 = 130;
const s3 = 110;

document.getElementById('ans').textContent = rightTriangle(s1, s2, s3);

