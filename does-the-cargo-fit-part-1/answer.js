willFit = (arr, amounts) => {
  const holds = {S: 50, M: 100, L: 200};
  return amounts.reduce((acc, val) => 
    {return acc + val}, 0) <= 
    arr.reduce((acc, val) => 
    {return acc + holds[val]}, 0) ?
    true :
    false;
}

const arr = ["M", "L", "L", "M"];
const amounts = [56, 62, 84, 90];

document.getElementById('ans').textContent = willFit(arr, amounts);