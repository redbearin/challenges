combineArrays = (...args) => {
  let len = 0;
  // find longest array
  for (let i = 0; i < args.length; i++) {
    if (args[i].length > len)
      len = args[i].length
  }
  let final =[];
  let subArr;
  // build subarrays of all elements in a 
  // certain position in an array
  // add subarrays to final array
  for (let i = 0; i < len; i++) {
    subArr = [];
    for (let j = 0; j < args.length; j++) {
      if (!args[j][i])
        subArr.push('*');
      else
        subArr.push(args[j][i]);
    }
    final.push(subArr);
  }
  return JSON.stringify(final);
}

const arr1 =  [false, "false"];
const arr2 = ["true", true, "bool"];
const arr3 = ["null", "undefined"];

document.getElementById('ans').textContent = combineArrays(arr1, arr2, arr3);
