thirdMostExpensive = obj => {
  const arr = Object.entries(obj);
  return arr.length < 3 ?
    false :
    arr.sort((a,b) => b[1] - a[1])[2][0];
}

const obj = { piano: 400, tv: 300, stereo: 200 };

document.getElementById('ans').textContent = thirdMostExpensive(obj);
