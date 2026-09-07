coinsDiv = arr => {
  arr.sort((a,b) => b-a);
  const sum = arr.reduce((val, acc) => acc+val)/3;
  //  const res = [];
  //  const search = (index, part = []) => {
  //     const s = part.reduce((a, b) => a + b, 0);
  //     if (s === sum){
  //        res.push(part)
  //     };
  //     if (s >= sum || index >= arr.length){      return; 
  //     };
  //        search(index, part.concat(arr[index]));
  //        search(index + 1, part);
  //  };
  //  search(0);
  //  return res;
  
}

const arr = [1, 2, 3, 2, 2, 2, 3];

document.getElementById('ans').textContent = coinsDiv(arr);
