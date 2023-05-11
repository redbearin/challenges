const standardDeviation = arr => {
  // find the mean
  const mean = arr.reduce((val, sum) => sum + val)/arr.length;
  
  let sum = 0;

  // find the sum of the square of the abs difference 
  // between the value and mean 
  for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(Math.abs(arr[i] - mean), 2);
  }

  // calculate the sqrt
  const squareRoot = Math.sqrt(sum/arr.length);

  // format the output
  // sqrt is an integer
  if (Number.isInteger(squareRoot))
    return squareRoot;
  // sqrt is a float
  return squareRoot.toFixed(2);
};

const arr = [-3, -5, -7];

document.getElementById('ans').textContent = standardDeviation(arr);