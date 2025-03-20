countIdenticalArrays = (...args) => {
  const arrStr = [];
  for (let i = 0; i < args.length; i++) {
    arrStr.push(args[i].join(''));
  }
  if (arrStr.length === [...new Set(arrStr)].length) {
    return 0;
  }
  return (arrStr.length - [...new Set(arrStr)].length) + 1;
}

document.getElementById('ans').textContent = 
countIdenticalArrays([0, 1, 2], [0, 1, 2], [0, 1, 2], [2, 1, 0]);