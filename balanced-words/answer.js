balanced = str => {
  let front, back, sumFt, sumBk;
  front = str.slice(0, Math.floor(str.length/2));
  back = str.slice (Math.ceil(str.length/2));
  sumFt = 0;
  sumBk = 0;
  for (let i = 0; i < front.length; i++) {
    sumFt += front.charCodeAt(i);
    sumBk += back.charCodeAt(i);
  }
  if (sumFt !== sumBk) {
    return false;
  }
  return true;
}

const str = "zips";

document.getElementById('ans').textContent = balanced(str);