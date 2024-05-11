goldDistribution = arr => {
  let mash = 0;
  let matt = 0;
  let i = 0;
  while (arr.length){
    console.log(arr)
    if (arr[0] >= arr[arr.length - 1]) {
      if (i % 2 === 0) {
        mash += arr[0];
      }
      else {
        matt += arr[0];
      }
      arr = arr.slice(1);
    }
    else {
      if (i % 2 === 0) {
        mash += arr[arr.length -1];

      }
      else {
        matt += arr[arr.length - 1];
      }
      arr = arr.slice(0, -1);
    }
    i++;
  }
  return JSON.stringify([mash, matt]);
}

const arr = [4, 2, 9, 5, 2, 7];

document.getElementById('ans').textContent = goldDistribution(arr);