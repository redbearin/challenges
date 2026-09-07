charBox = sideSize => {
  // size of side is not a number
  if(isNaN(sideSize)) {
    return -1;
  }
  //size of side is 0
  const box = [];
  if (sideSize === 0) {
    return  JSON.stringify([box]);
  }
  // size of side a num and greater than 0
  let sub;
  for (let i = 0; i < sideSize; i++) {
    sub =  [];
    for (let j = 0; j < sideSize; j++) {
      // edge element
      if (i === 0 || 
          j === 0 || 
          i === sideSize - 1 || 
          j === sideSize - 1 )
        sub.push('#');
      // not an edge element
      else
        sub.push(' ');
    }
    box.push(sub);
  }
  return JSON.stringify(box);
}
const sideSize = 4;

document.getElementById('ans').textContent  = charBox(sideSize);