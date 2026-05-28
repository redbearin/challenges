transformUpvotes = str => {
  const strArr = str.split(' ');
  const nums = [];
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i][strArr[i].length - 1] === 'k')
      nums.push(+strArr[i].slice(0, -1) * 1000);
    else {
      nums.push(+strArr[i]);      
    }
  }
  return JSON.stringify(nums)
}

const str = "20.3k 3.8k 7.7k 992";

document.getElementById('ans').textContent = transformUpvotes(str); 