thirdMostExpensive = items => {
  const itemsArr = Object.entries(items);
  if (itemsArr.length > 2) {
    return itemsArr.sort((a,b) => b[1] - a[1])[2][0];
  }
  return false;
}

const items = {piano: 100, stereo: 200, tv: 10, timmy: 500};

document.getElementById('ans').textContent = thirdMostExpensive(items);