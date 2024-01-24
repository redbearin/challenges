warpTunnel = (arr, n) => {
  const lenSub = arr[0].length;
  const arrFl = arr.flat();
  const nRem = n % arrFl.length;
  const combArr = (arrFl.slice(-nRem).concat(arrFl.slice(0, -nRem)));
  let chunksArr = [];
  for (let i = 0; i < combArr.length; i += lenSub) {
    chunksArr.push(combArr.slice(i, i + lenSub));
  }
  return JSON.stringify(chunksArr);
}

const arr = [[12, 36], [18, 27]];
const n = 149;

document.getElementById('ans').textContent = warpTunnel(arr, n);