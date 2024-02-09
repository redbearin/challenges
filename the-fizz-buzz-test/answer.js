fizzBuzz = max => {
  const finalNums = [];
  for (let num = 1; num <= max; num++) {
    if (num % 3 === 0) {
      // div by 3 and 5
      if (num % 5 === 0)
        finalNums.push('FizzBuzz');
      // div by 3 but not 5
      else
        finalNums.push('Fizz')
    }
    // div by 5, but not 3
    else if (num % 5 === 0)
      finalNums.push('Buzz')
    // not div by 3 or 5
    else
      finalNums.push(num)
  }
  return JSON.stringify(finalNums)
}

const max = 15;

document.getElementById('ans').textContent = fizzBuzz(max);

