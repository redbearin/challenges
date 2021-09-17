const thirdMostExpensive = stolenItems => {
  //break the object into an array of subarrays
  // and sort by the price, highest to lowest
  const sortedArray = Object.entries(stolenItems).
                      sort((a,b) => b[1] - a[1])
  // at least three entries
  if (sortedArray.length < 3)
    return false;
  //  >= three entries
  return sortedArray[2][0];
};

const stolenItems = { piano: 1000, tv: 500, ball: 10 , mirror: 200, };

document.getElementById('ans').textContent = thirdMostExpensive(stolenItems);