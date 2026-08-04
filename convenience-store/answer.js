changeEnough = (arr, ttl) => {
  return (arr[0]*.25 + arr[1]*.10 + arr[2]*.05 + arr[3]*.01) >= ttl ? 
  true:
  false;
}

const arr = [30, 40, 20, 5];
const ttl = 12.55

document.getElementById('ans').textContent = changeEnough(arr, ttl);