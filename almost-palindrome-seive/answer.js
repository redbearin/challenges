palindromeSieve = nums => {
  let counts, countsOfOdds, palOrAlmostPal, strNum;
  const sieveItems = [];
  for (let i = 0; i < nums.length; i++) {
    // set defaults
    countsOfOdds = 0;
    counts = {};
    palOrAlmostPal = true;
    strNum = nums[i].toString();

    // get counts of each digit
    for (let j = 0; j < strNum.length; j++) {
      if (counts[strNum[j]])
        counts[strNum[j]] = counts[strNum[j]] + 1;
      else
        counts[strNum[j]] = 1;
    }

    // determine if palindrome or almost palindrome
    // only one type of digit
    if (Object.keys(counts).length === 1) {
      sieveItems.push(nums[i]);
    }
    // more than one type of digit
    else {
      for (let key in counts) {
        if (counts[key] % 2) {
          if (countsOfOdds === 0) 
            countsOfOdds++;
          else {
            palOrAlmostPal = false;
            break;
          }
        }
      }
      if (palOrAlmostPal)
        sieveItems.push(nums[i])
    }
  } 
  return JSON.stringify(sieveItems);
}

const nums = [555, 687868877];

document.getElementById('ans').textContent = palindromeSieve(nums);