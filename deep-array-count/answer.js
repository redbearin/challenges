const deepCount = arr => {
  const str = JSON.stringify(arr);
  let count = 0;
  console.log(str)
  for (let i = 0; i < str.length; i++) {
    if ( str[i] === "]" || str[i] === "[" || str[i] === "," || str[i] === '"' )
      continue;
    count++;
  }
  return count;
};

const arr = ["x", "y", ["z"]];

document.getElementById('ans').textContent = deepCount(arr);