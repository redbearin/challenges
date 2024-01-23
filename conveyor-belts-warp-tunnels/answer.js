warpTunnel = (arr, n) => {
  const lenSub = arr[0].length;
  const str = arr.flat().join('');
  console.log(str)
  const nRem = n % str.length;
  console.log(nRem)
  const combArr = (str.slice(-nRem) + str.slice(0, -nRem)).split('');
  console.log(combArr)
  const numbers = combArr.map(ele => { 
    if (!isNaN(ele)) {
      return parseInt(ele, 10); 
    }
    else {
      return ele;
    }
  });
  let chunksArr = [];
  for (let i = 0; i < numbers.length; i += lenSub) {
    chunksArr.push(numbers.slice(i, i + lenSub));
  }
  return JSON.stringify(chunksArr);
}

const arr = [[12, 36], [18, 27]];
const n = 149;

document.getElementById('ans').textContent = warpTunnel(arr, n);